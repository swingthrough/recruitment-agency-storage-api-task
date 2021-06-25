import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  makeStyles,
  Theme,
  Button,
  Typography,
  Link,
  TextField,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "../../Routes";
import { JobAd, JobCandidate } from "../../models/models";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    //   alignItems: 'center',
    marginTop: "30px",
  },
  field: {
    marginBottom: theme.spacing(2),
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: theme.spacing(2),
  },
}));

interface CreateJobCandidateParams {}

const CreateJobCandidate: React.FC<CreateJobCandidateParams> = () => {
  const classes = useStyles();
  const history = useHistory()

  const [fullName, setFullName] = useState<string>("");
  const [expectedSalary, setExpectedSalary] = useState<number>(0);
  const [skills, setSkills] = useState<string>("");

  const handleCreate = useCallback(
      async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const response = await fetch('/v1/api/jobCandidates/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                full_name: fullName,
                expected_salary: expectedSalary,
                skills: skills,
              })
        })
        
        // TODO: validate response status
        
        history.push(ROUTES.JOB_CANDIDATES);
      },

      [fullName, expectedSalary, skills],
  )
  
  return (
    <Box className={classes.wrapper}>
      <TextField
        className={classes.field}
        required
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        className={classes.field}
        id="expected-salary"
        label="Expected Salary"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={expectedSalary}
        onChange={(e) => setExpectedSalary(Number(e.target.value))}
        onFocus={(e) => {
          e.target.select();
        }}
      />
      <TextField
        className={classes.field}
        required
        id="skills"
        label="Skills"
        variant="outlined"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <Button disabled={fullName.length === 0 || expectedSalary === 0 || skills.length === 0} onClick={e => handleCreate(e)}>Create</Button>
    </Box>
  );
};

export default CreateJobCandidate;
