import React from 'react';
import { Link } from 'react-router-dom';

class TypingButton extends React.Component {
    render() {
        return <Link to="/test"><button onClick={() => {console.log("Testing: Typing")}}>Start Typing</button></Link>
    }
}

export default TypingButton;