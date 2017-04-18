import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
// import CardData from '../../imports/collections/CardData';


BigCalendar.momentLocalizer(moment);


const styles = {
    dialogRoot: {
        paddingTop: '0',
        marginTop: '-65px',
        bottom: '0',
        overflow: 'scroll',
    },
    dialogContent: {
        width: '100%',
        maxHeight: '100%',
    },
    dialogBody: {
        maxHeight: '100%',
    },
};

//TODO: Pass all scheduled items & Pinterest OAuth status in props
class Schedule extends React.Component {
    state = {
        dialogOpen: false,
        board: '',
        image: '',
        note: '',
        link: '',
    };

    handleSelectEvent = (event) => {
        this.setState({ board: event.board });
        this.setState({ image: event.image_url });
        this.setState({ note: event.note });
        this.setState({ link: event.link });

        this.setState({ dialogOpen: true });
        if (this.props.onChange) {
            this.props.onChange({ dialogOpen: true });
        }
    };

    handleClose = () => {
        this.setState({ dialogOpen: false });
    };

    render() {
        const events = this.props.scheduledItems
            .map(event => ({
                start: new Date(event.year, event.month - 1, event.day, event.hours, event.minutes),
                end: new Date(event.year, event.month - 1, event.day, event.hours, event.minutes + 15),
                title: `${event.board} - ${event.note}`,
                board: event.board,
                note: event.note,
                link: event.link,
                image_url: event.image_url,
            }));

        const actions = [
            <FlatButton
                label="Close"
                primary
                onTouchTap={this.handleClose}
            />,
        ];

        return (
            <div>
                <div>
                    <BigCalendar
                        defaultView="day"
                        defaultDate={new Date()}
                        scrollToTime={new Date()}
                        toolbar
                        popup
                        step={30}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '500px', width: '100%', padding: '10px', paddingTop: '10px' }}
                        selectable
                        onSelectEvent={event => this.handleSelectEvent(event)}
                    />
                </div>
                <Dialog
                    repositionOnUpdate={false}
                    autoDetectWindowHeight={false}
                    autoScrollBodyContent={false}
                    actions={actions}
                    title={this.state.board}
                    modal={false}
                    onRequestClose={this.handleClose}
                    contentStyle={styles.dialogContent}
                    bodyStyle={styles.dialogBody}
                    style={styles.dialogRoot}
                    open={this.state.dialogOpen}
                >
                    <p>{this.state.note}</p>
                    <p>{this.state.link}</p>
                    <img alt="Calendar Event" src={this.state.image} />
                </Dialog>
            </div>
        );
    }
}

export default Schedule;

// export default createContainer(() => (
//     {
//         user: Meteor.user(),
//         scheduledItems: CardData.find({ userId: { $eq: Meteor.userId() } }).fetch(),
//     }), Schedule);

