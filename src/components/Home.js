import React from 'react';
import { Link } from 'react-router-dom';

// add a wee sentence to the Homepage, another place to click to access My Goals
const Home = () => (
    <div className ="home-page">
        <h3>Add a new goal to your <Link to="/goals">list</Link>!</h3>
    </div>
)

export default Home;