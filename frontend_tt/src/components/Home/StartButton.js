import React from 'react';

class StartButton extends React.Component {
    render() {
        return <button onClick={() => {console.log("Testing: Start")}}>High Scores!</button>
    }
}

export default StartButton;