import React from 'react';
import { Card, CardMedia, CardTitle, CardActions, FlatButton } from 'material-ui';
import logo from './logo.svg';

const style = {
  height: '100px',
  width: '100px',
  margin: '20px',
  textAlign: 'center',
  display: 'inline-block',
};

const Content = () => {
      return (
		  <div style={style}>
			  <Card>
           			<CardMedia>
             			<img alt="Pin" src={logo} />
           			</CardMedia>
           			<CardTitle title="Title" subtitle="Hello" />
           			<CardActions>
             			<FlatButton label="Submit" primary />
           			</CardActions>
         		</Card>
		  </div>
        );

};

export default Content;