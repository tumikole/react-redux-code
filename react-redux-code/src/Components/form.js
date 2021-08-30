import React from 'react';
import '../ComponentsCss/form.css'

class Form extends React.Component {
    constructor(props) {
        super(props);
    
    }
    render() {
        const {email, password,firstname,lastname,address,phoneNumber,retypePassword, city, surbub,zip,province} = this.props.myForm
        const {handleChange}= this.props;
        
        return (
            <div className='formContainer'>
              <br/>
              <form className="myForm">
  <div className="form-group">
        <input name="email" value={email}  onChange={handleChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <input name="password" value={password} onChange={handleChange} type="password" className="form-control" placeholder="Password"/>
  </div>

  <div className="form-group">
    <input name="retypePassword" value={retypePassword} onChange={handleChange} type="password" className="form-control" placeholder="Retype Password"/>
  </div>

  <div className="form-group">
    <input name="firstname" value={firstname} onChange={handleChange} type="text" className="form-control" placeholder="Enter your name"/>
  </div>

  <div className="form-group">
    <input name="lastname" value={lastname} onChange={handleChange} type="text" className="form-control" placeholder="Enter your surname"/>
  </div>

  <div className="form-group">
    <input name="phoneNumber" value={phoneNumber} onChange={handleChange} type="number" className="form-control" placeholder="Enter your phone number"/>
  </div>
  
  <button onClick={this.props.onSubmit} type="submit" className="btn btn-primary">Submit</button>
  <h3><small>Or sign Up with</small></h3>


</form>
<br/>
            </div>
        );
    }
}

export default Form