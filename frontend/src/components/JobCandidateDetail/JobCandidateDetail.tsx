import React, { useCallback, useEffect, useState } from 'react';
import { Box, makeStyles, Theme, Button, Typography, Link } from '@material-ui/core'
import { useHistory, useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import { JobAd, JobCandidate } from '../../models/models';

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    //   alignItems: 'center',
      marginTop: '30px'
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: theme.spacing(2)
    },
    detailBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(4)
    },
    boldSpan: {
        fontWeight: 'bold'
    },
    applyWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
  }))

interface JobCandidateDetailParams {
    id: string
}

const JobCandidateDetail: React.FC = () => {

    const classes = useStyles();
    const history = useHistory()
    
    const {id} = useParams<JobCandidateDetailParams>()
    
    const [jobCandidate, setJobCandidate] = useState<JobCandidate | null>(null);
    const [jobCandidateAppliedFor, setJobCandidateAppliedFor] = useState<JobAd[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const loadData = useCallback(async () => {
        setIsLoading(true);
        const responseJobCandidate = await fetch(`/v1/api/jobCandidates/${id.toString()}`);
        const dataJobCandidate = await responseJobCandidate.json();
        setJobCandidate(dataJobCandidate);
        const responseJobAds = await fetch(`/v1/api/jobAds?job_candidate=${id}`)
        const dataJobAds = await responseJobAds.json();
        setJobCandidateAppliedFor(dataJobAds);
        console.log('dataJobAds: ', dataJobAds)
        setIsLoading(false);
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);
    
    return <Box className={classes.wrapper}>
        <Button className={classes.backButton} onClick={() => history.push(ROUTES.JOB_CANDIDATES)}>Back to Job Candidates</Button>
        <Box className={classes.detailBox}>
            {isLoading === true ? (<Typography>Loading...</Typography>) : (
                jobCandidate === null ? (
                    <Typography>No candidate loaded</Typography>
                ) : (
                    <>
                        <Typography><span className={classes.boldSpan}>ID:</span> {jobCandidate.id}</Typography>
                        <Typography><span className={classes.boldSpan}>Full Name:</span> {jobCandidate.full_name}</Typography>
                        <Typography><span className={classes.boldSpan}>Expected Salary:</span> {jobCandidate.expected_salary}</Typography>
                        <Typography><span className={classes.boldSpan}>Skills:</span> {jobCandidate.skills}</Typography>
                        <Typography variant="h6">Applied for:</Typography>
                        <Box className={classes.applyWrapper}>
                            {jobCandidateAppliedFor.length > 0 ? jobCandidateAppliedFor.map(jobAd => (
                                <Typography key={jobAd.id}><Link component={RouterLink} to={ROUTES.JOB_AD_DETAIL.replace(':id', jobAd.id.toString())}>{jobAd.job_title}</Link></Typography>
                            )) : (
                                <Typography>No job applications</Typography>
                            )}
                        </Box>
                    </>
                )
            )}
        </Box>
    </Box>
}

export default JobCandidateDetail;