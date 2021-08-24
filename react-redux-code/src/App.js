import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: '',
      surname: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({...this.state,[event.target.name]: event.target.value});
  }

  onSubmit(event){
    const newList = []
      event.preventDefault();
      this.setState({
        
        ...this.state,list:[...this.state.list, {name:this.state.name,surname:this.state.surname}]
      })
      newList.push({...this.state,list:[...this.state.list, {name:this.state.name,surname:this.state.surname}]})
  }
  
  
  
  render() {
    
    
    return (
<div>
      <form>
        
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          Surname
          <input name="surname" type="text" value={this.state.surname} onChange={this.handleChange} />
          <input type="submit" onClick={this.onSubmit}/>
      </form>

{this.state.list.map((list, index) =>{
  return(


    <table>
      <tr>
<th>Name</th>
<th>Surname</th>


      </tr>
    
      <tr key={index}>
         <td>
           {list.name}

         </td>
         <td>
           {list.surname}
           
         </td>
      </tr>
      </table>
  )
})}

      
      </div>
     )};
     };
export default App;
