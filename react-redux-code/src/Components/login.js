import React, { Component } from 'react';
import logo from '../assets/logo.png'

class Login extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-dark bg-dark">
                       <div className="logo">
          <img src={logo} width="100" height="50" alt=""/>
        </div>
        <ul>
               <li>home</li> 
                <li>people</li>
                <li>chats</li>
                <li>notifications</li>
                <li>Profile</li>
                </ul>
</nav>
            </div>
        );
    }
}

export default Login;