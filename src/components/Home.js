import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className ="home-page">
        <h4>Ready to add a new goal to your <Link to="/goals">list</Link>?</h4>
    </div>
)

export default Home;