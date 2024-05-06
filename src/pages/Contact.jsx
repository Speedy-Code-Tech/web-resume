import React, { useState, useRef } from 'react'
import contcats from '../assets/contact.png'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
function Contact(props) {

  const form = useRef('');
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_naree9o', 'template_5nl7azh', form.current, {
        publicKey: 'kOeNMazdIADyriOfF',
      })
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text: 'Email sent successfully!',
            icon: 'success',
          });
         
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send email. Please try again later.',
            icon: 'error',
          });
        },
      );
  };
  return (
    <>
      <div className="container-fluid m-0 boxes" id="contact" style={{ backgroundImage: `url(${contcats})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-100px', height: "100vh" }}>
        <h2 clas sName="h2 m-0 p-3" style={{ color: props.themes.subText }}>CONTACTS</h2>
        <hr className="text-white p-0 m-0 mx-3" />
        <div className="container-fluid d-flex cons">
          <div className="container h-75 pt-5 ps-5">
            <h3 className='text-white'>DON'T BE A STRANGER <br />JUST SAY HELLO.</h3>
            <p className="text-white pe-5">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello! Whether you have a project in mind or simply want to connect, I'm here to help.

              Looking forward to hearing from you!
            </p>
            <div className="container-fluid d-flex justify-content-center align-items center">
            <form ref={form} onSubmit={sendEmail} className='d-flex flex-column  gap-2 w-75'>
             
             <input type="text" name="to_name" className='input' placeholder="Name" />
             <input placeholder="Email" className='input' type="email" name="from_name" />
             <textarea name="message" className='input' placeholder="Your Message Here..." />
             <input type="submit" className='send' value="Send" />
           </form>
            </div>
          </div>
          <div className="pt-5 container h-75 d-flex flex-column  justify-content-end text-white">
            <p className='fs-4'>Contact Information</p>
            <div className="container-fluid d-flex flex-column gap-4 conko">
              <div className="container-fluid d-flex text-white conko ms-0">
                <i className="bi bi-geo-fill"> Valeros St. Purok 4A, Brgy Dalas, Labo Camarines Norte (4604) - Philipphines </i>
              </div>
              <div className="container-fluid d-flex text-white conko ms-0">
                <i className="bi bi-telephone"> +63 (938) 083 1513</i>
              </div>
              <div className="container-fluid d-flex text-white conko ms-0">
                <i className="bi bi-envelope"> hagupitsalenjohnjester@gmail.com</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

