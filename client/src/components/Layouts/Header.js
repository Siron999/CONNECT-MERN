import React from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from '../Auth/AuthOptions';

export default function Header() {
    return (
        <div className="headerclass">
            <Link to="/"><h3 id="title">CONNECT</h3></Link>
            <AuthOptions />
        </div>
    )
};
