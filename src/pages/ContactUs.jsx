import React from 'react'
import Layout from './../components/Layout/Layout';
import  '../styles/formg.css'
function ContactUs() {
    const submitHandler=()=>{
        alert("Ordered Placed Successfully")
    }
  return (
    <Layout>
    <div className='k'>
    <h1 className='j'><b>Order Now</b></h1>
    <form className='group' onSubmit={submitHandler}>
   <label>Name :</label>
   <input type = "text" placeholder='Enter your Name' required='Required' ></input><br></br><br></br>
   <label>City :</label>
   <input type = "text" placeholder='Enter your City' required='Required' ></input><br></br><br></br>
   <label>Address :</label>
   <input type = "text" placeholder='Full Address' required='Required'></input><br></br><br></br>
   <label>Select Dishes :</label>
   <input type = "text" placeholder='Select Dishes' required='Required'></input><br></br><br></br>
   <button type='submit' className='l'>Submit</button>
    </form>
    </div>
    </Layout>
  )
}

export default ContactUs