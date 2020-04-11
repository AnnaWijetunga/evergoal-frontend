import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import GoalInput from '../components/Goals/GoalInput';
import GoalsContainer from './GoalsContainer';
import ObjectivesContainer from './ObjectivesContainer';
import MainHeader from '../components/MainHeader';
// import { Container, Header }

class Main extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <Container>
                    <Header as='h3' className='tagline'>“A goal properly set is halfway reached.” —Zig Ziglar</Header>
                    <NavBar />

                    <Container>
                        
                        <Route  />
                        <Route  />
                        <Route  />
                        <Route  />

                    </Container>
                </Container>
            </div>
        )
    }
}

export default Main;