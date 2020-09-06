import React from 'react';
import { Link } from 'react-router-dom';

class ScoresButton extends React.Component {
    render() {
        return <Link to="/scores"><button onClick={() => {console.log("Testing: Start")}}>High Scores!</button></Link>
    }
}

export default ScoresButton;