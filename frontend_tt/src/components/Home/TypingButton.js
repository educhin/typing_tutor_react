import React from '../../../node_modules/react';
import { Link } from '../../../node_modules/react-router-dom';

class TypingButton extends React.Component {
    render() {
        return <Link to="/test"><button onClick={() => {console.log("Testing: Typing")}}>Start Typing</button></Link>
    }
}

export default TypingButton;