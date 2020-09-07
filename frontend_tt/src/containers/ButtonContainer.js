import React from 'react';
import TypingButton from '../components/home/TypingButton.js';
import ScoresButton from '../components/home/ScoresButton';

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