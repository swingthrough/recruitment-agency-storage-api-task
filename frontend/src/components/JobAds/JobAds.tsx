import {
    Box,
    makeStyles,
    Paper,
    Table,
    TableContainer,
    Theme,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Button,
    Typography,
  } from "@material-ui/core";
  import React, { useCallback, useEffect, useState } from "react";
  import { useHistory } from "react-router";
  import { JobAd, JobCandidate } from "../../models/models";
  import { ROUTES } from "../../Routes";
  
  const useStyles = makeStyles((theme: Theme) => ({
    table: {
      minWidth: 650,
    },
  }));
  
  interface JobAdsProps {}
  
  let JobAds: React.FC<JobAdsProps> = () => {
    const classes = useStyles();
    const history = useHistory();
  
    const [jobAds, setJobAds] = useState<JobAd[]>([]);
  
    const loadData = useCallback(async () => {
      const response = await fetch("/v1/api/jobAds/");
      const data = await response.json();
      setJobAds(data);
    }, []);
  
    useEffect(() => {
      loadData();
    }, [loadData]);
  
    return (
      <Box>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobAds.map((ja) => (
                <TableRow key={ja.id}>
                  <TableCell>
                    <Typography>{ja.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{ja.job_title}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{ja.salary}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        history.push(ROUTES.JOB_AD_DETAIL.replace(':id', ja.id.toString()))
                      }
                    >
                      Detail
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default JobAds;
  