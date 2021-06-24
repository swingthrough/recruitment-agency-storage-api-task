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

interface JobAdDetailParams {
    id: string
}

const JobAdDetail: React.FC = () => {

    const classes = useStyles();
    const history = useHistory()
    
    const {id} = useParams<JobAdDetailParams>()
    
    const [jobAd, setJobAd] = useState<JobAd | null>(null);
    const [jobAdAppliedCandidates, setJobAdAppliedCandidates] = useState<JobCandidate[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const loadData = useCallback(async () => {
        setIsLoading(true);
        const responseJobAd = await fetch(`/v1/api/jobAds/${id.toString()}`);
        const dataJobAd = await responseJobAd.json();
        setJobAd(dataJobAd);
        const responseJobCandidates = await fetch(`/v1/api/jobCandidates?job_ad=${id}`)
        const dataJobCandidates = await responseJobCandidates.json();
        setJobAdAppliedCandidates(dataJobCandidates);
        console.log('dataJobCandidates: ', dataJobCandidates)
        setIsLoading(false);
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);
    
    return <Box className={classes.wrapper}>
        <Button className={classes.backButton} onClick={() => history.push(ROUTES.JOB_ADS)}>Back to Job Ads</Button>
        <Box className={classes.detailBox}>
            {isLoading === true ? (<Typography>Loading...</Typography>) : (
                jobAd === null ? (
                    <Typography>No candidate loaded</Typography>
                ) : (
                    <>
                        <Typography><span className={classes.boldSpan}>ID:</span> {jobAd.id}</Typography>
                        <Typography><span className={classes.boldSpan}>Job Title:</span> {jobAd.job_title}</Typography>
                        <Typography><span className={classes.boldSpan}>Salary:</span> {jobAd.salary}</Typography>
                        <Typography><span className={classes.boldSpan}>Full job description:</span></Typography>
                        <Typography>{jobAd.ad_full_ad_text}</Typography>
                        <Typography variant="h6">Applied candidates:</Typography>
                        <Box className={classes.applyWrapper}>
                            {jobAdAppliedCandidates.length > 0 ? jobAdAppliedCandidates.map(jobCandidate => (
                                <Typography key={jobCandidate.id}><Link component={RouterLink} to={ROUTES.JOB_CANDIDATE_DETAIL.replace(':id', jobCandidate.id.toString())}>{jobCandidate.full_name}</Link></Typography>
                            )) : (
                                <Typography>No applied candidates</Typography>
                            )}
                        </Box>
                    </>
                )
            )}
        </Box>
    </Box>
}

export default JobAdDetail;