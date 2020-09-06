import React from 'react';
import ButtonContainer from './ButtonContainer.js';


class Home extends React.Component {
    render() {
        return (
            
            <div>
                <h1>Home is where the heart is.</h1>
                <p>
                    ~Small Desc about the project~
                </p>
                <ButtonContainer />
            </div>
        )
    }
}

export default Home;