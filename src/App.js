import React, {Component} from 'react';
import './App.css';

import ReactFrame from 'react-frame-component';

import once from 'lodash/once';

import ReactGrid from 'react-stack-grid';

import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Content from './content';

import injectTapEventPlugin from 'react-tap-event-plugin';

const tapInitOnce = once(() => injectTapEventPlugin());

const styles={
	height:'100%',
	width:'100%'
};

class App extends Component {
    render() {
        tapInitOnce();
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div>
                    <ReactFrame style={styles}>
                        <ReactGrid>
                           <Content />
                            <Content />
                            <Content />
                            <Content />
                        </ReactGrid>
                    </ReactFrame>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
