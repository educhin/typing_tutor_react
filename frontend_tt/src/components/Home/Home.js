import React from 'react';
import ButtonContainer from '../../containers/ButtonContainer.js';
import './home.css'

function Home() {
    return (
            
        <div className="home">
            <h1>Welcome to Typing Tutor React!</h1>
            <p>
            On my technology journey I have been severely held back by my typing speed, accuracy, and consistency. I made a concious effort to improve my skills and began reguraly using sites like speedcoder.net and typeracer.com. Since I started practicing I have more than doubled my typing speed and improved my accuracy. This project pays homage to the old disk typing games and is a way for me to improve my dev skills while creating a space for other devs to practice their typing.
            </p>
            <ButtonContainer />
        </div>
    )
}

export default Home;