import { AppBar, makeStyles, Theme, Button, Toolbar } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { ROUTES } from '../../Routes'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  }
}))

interface MenuBarProps {
}

let Try: React.FC<MenuBarProps> = () => {

    const classes = useStyles();
    const history = useHistory()

    return <AppBar position="static">
        <Toolbar>
          <Button className={classes.button} onClick={() => history.push(ROUTES.JOB_CANDIDATES)}>
            Job Candidates
          </Button>
          <Button className={classes.button} onClick={() => history.push(ROUTES.JOB_ADS)}>
            Job Ads
          </Button>
        </Toolbar>
    </AppBar>
}

export default Try;