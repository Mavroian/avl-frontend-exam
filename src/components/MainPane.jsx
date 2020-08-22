import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import LineChart from './Charts/MediaPlayersLineChart'
import { Icon, InlineIcon } from '@iconify/react';
import calculatorIcon from '@iconify/icons-mdi/calculator';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 539,
    backgroundColor:'#22252a',
    color: '#fff'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  content: {
    color: '#fff'
  },
  mainPaneTitle: {
    color:'#ecae0b',
    display: 'flex',
    margin: '10px 30px',
    fontWeight: '600',
  },
  tagA: {
    background: 'linear-gradient(180deg, rgba(28,147,216,1) 8%, rgba(95,214,223,1) 100%)',
    borderRadius: '5px',
    height: '30px',
    marginRight:'5px',
    color:'#fff',
    fontWeight:'600'
  },
  tagB: {
    background: 'linear-gradient(180deg, rgba(31,94,129,1) 8%, rgba(64,126,132,1) 100%)',
    borderRadius: '5px',
    height: '30px',
    marginRight:'5px',
    color:'#fff',
    fontWeight:'600'
  },
  tagB2: {
    background: 'linear-gradient(180deg, rgba(31,59,76,1) 8%, rgba(44,70,77,1) 100%)',
    borderRadius: '5px',
    height: '30px',
    marginRight:'5px',
    color:'#fff',
    fontWeight:'600'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        <p className={classes.mainPaneTitle}> <Icon style={{color:'#fff'}} icon={calculatorIcon} /> Arithmetic &#xb7; Real Problem</p> 
      <hr
        style={{width:'90%', color:'grey'}}
      />
      <CardContent >
        <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
          The recomended daily calcuim intake for a 20-year-old is 1.000 miligram(mg). 
          One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium.
          Which of the wollowing inequialities represents the possible number of cups of milk m and cups 
          of juice j a 20-year-old could frink ina day to meet r exceed the recommended daily calcium 
          intake from these drink alone?
        </Typography>
      </CardContent>

        <LineChart/>
      <CardActions disableSpacing>
       <button className={classes.tagA}> Tag A</button>
       <button className={classes.tagB}>Tag B</button>
       <button className={classes.tagB2}>Tag B</button>
      </CardActions>
    </Card>
  );
}