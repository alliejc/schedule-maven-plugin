import React from 'react';
import CardItem from './card-item';
import ReactGrid from 'react-stack-grid';
import ReactFrame from 'react-frame-component';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { IconButton, AppBar } from 'material-ui';

//TODO:Fix height to match window height - 100% does not work
const styles={
    height: '1000px',
    width:'100%'
};

//Display iFrame with cards to schedule
//TODO:Dynamically load CardItem(s) to display
class ReactIFrame extends React.Component {
    render() {
        return (
            <div>
                <ReactFrame style={styles}>
                    <AppBar
                        iconElementRight={<IconButton><NavigationClose /></IconButton>}/>
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

