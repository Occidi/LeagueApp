import React from 'react';
import ReactDOM from 'react-dom';

// Page
import LeagueApp from './components/LeagueApp';

// Routing
let App = React.createClass({
    render() {
        return(
            <LeagueApp/>
        );
    },
});

ReactDOM.render(<App />, document.getElementById('app-wrapper'));
