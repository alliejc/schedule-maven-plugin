import React from 'react';
import { Card, CardMedia, CardTitle, CardActions, FlatButton } from 'material-ui';
import logo from '../logo.svg';
import TimePicker from './time-picker';
import Calendar from './date-picker';


const styles = {
    display: 'wrap',
    flexDirection: 'row wrap',
    width: 'auto%',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
};

const mediaStyles = {
    padding: '8px',
};


//Receive scraped images w/metadata to display as schedule cards
class CardItem extends React.Component {

    state = {
        // pin
        image_url: '',
        note: '',
        selectedBoardUrl: '',
        board: '',
        link: '',

        // time
        hours: 0,
        minutes: 0,

        // date
        day: 0,
        month: 0,
        year: 0,
        date: 0,
    };

    setTime = (hours, minutes) => {
        this.setState({ minutes });
        this.setState({ hours });
    };

    setDate = (day, month, year) => {
        this.setState({ day });
        this.setState({ month });
        this.setState({ year });
    };
    render() {
        return (
			<div>
				<Card>
					<CardMedia style={mediaStyles}>
						<img alt="Pin" src={logo}/>
					</CardMedia>
					<CardTitle style={styles} title="Title" subtitle="Hello"/>
					<CardActions>
						<TimePicker onChange={(hours, minutes) => this.setTime(hours, minutes)}/>
						<Calendar
							onChange={(day, month, year) => this.setDate(day, month, year)}
							day={this.state.date}
						/>
						<FlatButton label="Submit" primary/>
					</CardActions>
				</Card>
			</div>
        );
    }

}

export default CardItem;