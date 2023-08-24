import React, { useState } from 'react';
const styles ={
    form:{
      width: '70%',
      margin: '10%'
    },
    button:{
      backgroundColor: 'purple',
      color: 'white',
    }
}
function Contact(){

    const [email, setEmail] = useState('');
    const [inputName, setName] = useState('');
    const [message, setMessage] = useState('');
    const handleInputChange = (e) =>{
        // update state so that input values will be accurate
        const {name, value} = e.target;
        console.log(e.target);

        if(name === 'name'){
            console.log(value);
             setName(value)
        }else if (name === 'email'){
            console.log(value);
             setEmail(value)
        }else if (name === 'message'){
            console.log(value);
             setMessage(value)
        }
    }

    const handleFormSubmit = (e) => {
        // submit form and reset inputs
        e.preventDefault(); 
        setName('')
        setEmail('')
        setMessage('')
    }

    return(
        <div id='contact' className='row'>
        <form style={styles.form} className='col'>
  <div className="mb-3">
    {/* <label htmlFor="inputEmail" className="form-label">Email address</label> */}
    <input type="email" value={email} onChange={handleInputChange} placeholder='email' className="form-control" name="email"/> 
  </div>
  <div className="mb-3">
    {/* <label htmlFor="name" className="form-label">Name</label> */}
    <input type="text" value={inputName} onChange={handleInputChange} placeholder='name' className="form-control" name="name"/> 
  </div>
  <div className="mb-3">
    {/* <label htmlFor="exampleInputPassword1" className="form-label">Message</label> */}
    <input type="textarea" value={message} onChange={handleInputChange} placeholder='message' className="form-control" name="message"/> 
  </div>
  <button style={styles.button} type="submit" onClick={handleFormSubmit} className="btn ">Submit</button>
</form>
</div>
    )
}
export default Contact;