import React, {Component} from 'react';
import './App.css';
import once from 'lodash/once';
import myTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactIFrame from './components/react-iframe';
// import Schedule from "./components/schedule";

const tapInitOnce = once(() => injectTapEventPlugin());

class App extends Component {
    render() {
        tapInitOnce();
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
                <div>
                    <ReactIFrame />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
