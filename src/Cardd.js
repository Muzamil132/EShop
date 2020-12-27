import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {useContext} from 'react'
import {StateContext} from './StateProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding:10,
    maxWidth:500,
    marginTop:20,
    marginLeft:10,
    marginRight:10

    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  btn:{
    marginTop:5
  }
}));

export default function Cardd({price,name,image,id}) {
  const classes = useStyles();
  const theme = useTheme();
  const {remove}=useContext(StateContext)
   const removeFromBasket=()=>{
     remove(id)
   }
  
  
  return (
    <div className="grid">
       <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h1" variant="h5">
            {name}
          </Typography>
          <Typography>
          PRICE  {price}$
          </Typography>
          <Button  onClick={removeFromBasket} className={classes.btn} variant="contained">REMOVE</Button>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image={image}
        title="Live from space album cover"
      />
    </Card>
    </div>
   
  );
}