import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className ="home-page">
        <h4>New goal in mind? What's next on your <Link to="/goals">list?</Link></h4>
    </div>
)

export default Home;