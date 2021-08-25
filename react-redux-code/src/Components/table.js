import React from 'react';

class Table extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
       
    const {list}= this.props
    
        return (
    <div>
     {list.length > 0 &&    <table className="table">
            <thead>
                <tr>
                     <th scope="col">Email</th>
                     <th scope="col">Firstname</th>
                     <th scope="col">Lastname</th>
                     <th scope="col">phoneNo:</th>
                     <th scope="col">Address</th>
        
                 </tr>
            </thead>

             <tbody>
        {list.map((list,index) =>{
      return(
                <tr key={index}>
              <td>
                {list.email}
              </td>
              
              <td>
                {list.firstname}
              </td>
              <td>
                {list.lastname}
              </td>
              <td >
                {list.phoneNumber}
              </td>
              <td className="address-section">
                  <p>{list.address}</p>
                  <p>{list.surbub}</p>
                  <p>{list.province}</p>
                  <p>{list.city}</p>
                  <p>{list.zip}</p>
                
              </td>
             </tr>
)
})}

             </tbody>
             </table>}
    
          
          </div>
         )};
         };
    export default Table;
    
