import React from 'react'
import PROJECT1 from '../assets/tcity.png'
import PROJECT2 from '../assets/medapp.png'
function Project(props) {
  return (
    <>
    <div className="container-fluid m-0 boxes" id="project" style={{background:props.themes.main}}>
    <div className="h2 m-0 p-3" style={{color:props.themes.subText}}>PROJECTS</div>
        <hr className="text-white p-0 m-0 mx-3" />
        <div className="p-5 container-fluid d-flex projects">
          <div className="container">
            <h3 className="text-white text-center">
            Tanuan City Integrated High School Attendance System
            </h3>
            <img src={PROJECT1} alt="" className='img-fluid' />
          </div>
          <div className="container text-center">
            <h3 className="text-white  text-center" style={{paddingBottom:"33px"}}>
            Drug Alarm Monitoring System 
            </h3>
            <img src={PROJECT2} alt="" className='w-50' />
          </div>
          
        </div>
    </div>
    </>
  )
}

export default Project