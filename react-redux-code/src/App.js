import React from 'react';
import Form from '../src/Components/form'
import Table from '../src/Components/table'
import { v4 as uuidv4 } from 'uuid';


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
      phoneNumber: '',
      address: '',
      province:'',
      city: '',
      zip: ''
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
          const { email, password, retypePassword, firstname, lastname, phoneNumber, address,province, city, zip} = this.appData
            this.setState({
              email: email,
               password: password,
               retypePassword: retypePassword,
               firstname: firstname,
               lastname: lastname,
               phoneNumber: phoneNumber,
               address: address,
               province: province,
               city: city,
               zip: zip
        })
    } else {
        this.setState({
          email: '',
          password: '',
          retypePassword: '',
          firstname: '',
          lastname: '',
          phoneNumber: '',
          address: '',
          province:'',
          city: '',
          zip: ''
        })
    }
    }
      
  
  
  
  
  render() {
    
    
    return (
      <div>
      <h1>Register Form</h1>
      <Form myForm={this.state.person} handleChange={this.handleChange} onSubmit={this.onSubmit}/>
      <Table list={this.state.list} />
      </div>



    )}
     };
export default App;
