import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import GoalInput from '../components/Goals/GoalInput';
import GoalsContainer from './GoalsContainer';
import ObjectivesContainer from './ObjectivesContainer';
import MainHeader from '../components/MainHeader';
import { Container, Header } from 'semantic-ui-react';

// because of { Route } we can display one component at a time - and the exact parameter means only that title/name will be rendered (example, / for Home)

class Main extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <Container>
                    <Header as='h3' className='tagline'>Write It Down, Make It Happen</Header>
                    <NavBar />

                    <Container>
                        <Route exact path='/' render={Home} />
                        <Route exact path='/goals/new' component={GoalInput} />
                        <Route exact path='/goals' component={GoalsContainer} />
                        <Route exact path='/goals/:goalId/objectives' component={ObjectivesContainer} />
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Main;