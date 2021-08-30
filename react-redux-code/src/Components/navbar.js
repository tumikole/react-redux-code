import React, { Component } from 'react';
import logo from '../assets/logo.png'
import '../ComponentsCss/navbar.css'

class navbar extends Component {
    render() {
        return (
            <div>
                       <nav className="navbar navbar-dark bg-dark">
                       <div className="logo">
          <img src={logo} width="100" height="50" alt=""/>
        </div>

        <form className="nav-form" action="/action_page.php">
      <input type="text" placeholder="Username" name="username"/>
      <input type="text" placeholder="Password" name="password"/>
      <button type="submit">Login</button>
    </form>
</nav>
            </div>
        );
    }
}

export default navbar;