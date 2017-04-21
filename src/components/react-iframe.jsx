import React from 'react';
import CardItem from './card-item';
import ReactGrid from 'react-stack-grid';
import ReactFrame from 'react-frame-component';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { IconButton, AppBar } from 'material-ui';

//TODO:Fix height to match window height - 100% does not work
const styles={
    iReactFrame: {
        height: '1000px',
        width:'100%'
    },
    bar: {
        backgroundColor: 'transparent'
    },
};

//Display iFrame with cards to schedule
//TODO:Dynamically load CardItem(s) to display
class ReactIFrame extends React.Component {
    state={
        open: true
    };

    //TODO: Figure out how to close react-frame-component
    handleClose = () => {
        this.setState({ open: false });

        if (this.props.onChange) {
            this.props.onChange( this.state.open );
        }
    };

    render() {
        return (
            <div>
                <ReactFrame style={styles.iReactFrame} open={this.state.open}>
                    <AppBar
                        style={styles.bar}
                        iconElementRight={<IconButton iconStyle={{backgroundColor:'black'}} onTouchTap={this.handleClose}><NavigationClose /></IconButton>}/>
                    <ReactGrid columnWidth="25%"
                               monitorImagesLoaded >
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </ReactGrid>
                </ReactFrame>
            </div>
        )
    }
}

export default ReactIFrame;

