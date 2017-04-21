/*global chrome*/
import React, {Component} from 'react';
// import './App.css';
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

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
//
// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {showHeader: true};
//         this.handleClick = this.handleClick.bind(this);
//         chrome.runtime.sendMessage({action: "popupOpen"}).bind(this);
//
//     }
//
//     handleClick() {
//         console.log('clicked');
//         this.setState( prevState => ({
//             showHeader: !prevState.showHeader
//         }));
//     }
//     render() {
//         return (
//             <div className="App">
//                 <div className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     {this.state.showHeader && <h2>Welcome to React Jon</h2>}
//                 </div>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <button onClick={this.handleClick}>
//                     {this.state.showHeader ? "HIDE" : "SHOW"}
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default App;

