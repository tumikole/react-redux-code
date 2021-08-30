import React from 'react';
import Navbar from '../src/Components/navbar'
// import logo from '../src/assets/logo.png'
import Facebook from '../src/assets/Facebook.png'
import Google from '../src/assets/google.png'
import Form from '../src/Components/form'
import Table from '../src/Components/table'
// import Login from '../src/Components/login'
import { v4 as uuidv4 } from 'uuid';
// import ReactDOM from 'react-dom';
// import {BrowserRouter, Switch, Route, Link} from "react-router-dom"


// import GoogleLogin from 'react-google-login';
import './App.css'



class App extends React.Component {
  appData;
  constructor(props) {
    super(props);
    this.state = {
      list: [],
     person :{
       id:uuidv4(),
      email: '',
      password: '',
      retypePassword: '',
      firstname: '',
      lastname: '',
      phoneNumber: ''
   
    }
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({...this.state,[event.target.name]: event.target.value});
  }

  onSubmit(event){
    const {list,person} = this.state
    list.push(person)
    event.preventDefault();
    localStorage.setItem('data',JSON.stringify(list));
      }

      componentDidMount() {
        this.appData = JSON.parse(localStorage.getItem('data'));
        
        if (localStorage.getItem('data')) {
          const { email, password, retypePassword, firstname, lastname, phoneNumber} = this.appData
            this.setState({
              email: email,
               password: password,
               retypePassword: retypePassword,
               firstname: firstname,
               lastname: lastname,
               phoneNumber: phoneNumber
               
        })
    } else {
        this.setState({
          email: '',
          password: '',
          retypePassword: '',
          firstname: '',
          lastname: '',
          phoneNumber: ''
         
        })
    }
    }
      
  
  
  
  
  render() {
    
    
    return (
      // <Router>

      <>
      <Navbar />
      {/* <Login /> */}
      <br/> 
      <container className="grid-container">
       
         <div className="columnLeft">
       <h1>Welcome to <span>
         <br/>
         <u>NeXeT</u>
         </span></h1>
         </div>
         <div class="vl"></div>

         <div className="columnRight">
          <div className="columnRightVl">
           <Form myForm={this.state.person} handleChange={this.handleChange} onSubmit={this.onSubmit}/>
           <div className="facebookGoogle">
           <div className="Facebook">
          <button><img className="facebookGoogle-button" src={Facebook} width="100" height="50" alt=""/></button>
        </div>
        <br/>
        <div className="Google">
          <button><img className="facebookGoogle-button" src={Google} width="100" height="50" alt=""/></button>
        </div>
        </div>
           </div>
         </div>
       
      
      </container>
    
           <Table list={this.state.list} />
          
</>
// </Router>


    )}
     };
export default App;
