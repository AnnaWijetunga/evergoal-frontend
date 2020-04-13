import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className ="home-page">
        <h3>Add a new goal to your <Link to="/goals">list</Link>!</h3>
    </div>
)

export default Home;