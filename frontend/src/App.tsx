import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import JobCandidates from './components/JobCandidates/JobCandidates';
import { ROUTES } from './Routes';
import { Box, makeStyles, Theme } from '@material-ui/core'
import JobCandidateDetail from './components/JobCandidateDetail/JobCandidateDetail';
import JobAdDetail from './components/JobAdDetail/JobAdDetail';
import JobAds from './components/JobAds/JobAds';

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px'
  },
  routesWrapper: {
    width: '80%',
  }
}))

function App() {

  const classes = useStyles();
  
  return (
    <div className="App">
      <BrowserRouter>
        <MenuBar />
        <Box className={classes.wrapper}>
          <Box className={classes.routesWrapper}>
            <Switch>
              <Route path={ROUTES.JOB_CANDIDATE_DETAIL} component={JobCandidateDetail}/>
              <Route path={ROUTES.JOB_CANDIDATES} component={JobCandidates}/>
              <Route path={ROUTES.JOB_AD_DETAIL} component={JobAdDetail}/>
              <Route path={ROUTES.JOB_ADS} component={JobAds}/>
            </Switch>
          </Box>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
