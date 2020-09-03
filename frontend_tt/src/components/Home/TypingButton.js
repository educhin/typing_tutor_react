// function TypingButton() {
//     return <button>Start Typing</button>
// }

import React from 'react';

class TypingButton extends React.Component {
    render() {
        return <button onClick={() => console.log("Testing: Typing")}>Start Typing</button>
    }
}

export default TypingButton;