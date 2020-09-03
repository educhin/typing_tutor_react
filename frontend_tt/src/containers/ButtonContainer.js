import React from 'react';
import TypingButton from '../components/Home/TypingButton.js';
import ScoresButton from '../components/Home/ScoresButton';

class ButtonContainer extends React.Component {
    render() {
        return (
        <div>
            <TypingButton/>
            <ScoresButton/>
        </div>
        )
    }
}   

export default ButtonContainer