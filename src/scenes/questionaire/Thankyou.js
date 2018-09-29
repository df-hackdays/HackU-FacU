import React, { Component } from 'react'
import NavBar from '../../components/navigation/NavBar';
import './thankyou.css';
import Footer from '../../components/footer';

class Thankyou extends Component{

    render() {
      return(
        <div className='ThankyouWrapper'>
          <NavBar/>

          <h1>Thank you!!</h1>

          <h3>
            You and your child will learn how coding and techonology can become applicable in your life, education, and career.
          </h3>
          <img className='ThankyouIcons'  src='/images/Thankyou_icons.png' alt="Thank you icon"/>

          <p>
            You will be able to return to this page for updates on your child's progress!
          </p>

          <Footer />
          
        </div>
      )
    }


}

export default Thankyou