import React from 'react'
import MAIN from '../assets/mian.png'
function Home(props) {
    return (
        <>
            <div id='home' className="container-fluid d-flex justify-content-center  align-items-center gbs" >
                {/* <img src={props.themes.img} style={{position:'absolute'}}/> */}
               
                <div style={{position:"absolute",zIndex:2}} className="container d-flex flex-column  justify-content-center align-items-center ">
                    <p style={{ color: props.themes.subText, fontSize: "2.5em" }} className='p-0 m-0'>Jester Salen</p>
                    <p className="p-0 m-0 fw-200" style={{ color: props.themes.text }}>Web, App, Embedded Developer</p>
                    <p className="p-0 m-0 fw-200" style={{ color: props.themes.text, textAlign: "center" }}>Mastering the web, conquering apps, embedding innovation,<br></br> all while thriving as a student and freelancer.</p>
                    <div className="d-flex gap-1">
                        <a href="" className="btn"><i style={{ color: props.themes.text, fontSize: "1.25em" }} class="socials bi bi-facebook"></i></a>
                        <a href="" className="btn"><i style={{ color: props.themes.text, fontSize: "1.25em" }} class="socials bi bi-github"></i></a>
                        <a href="" className="btn"><i style={{ color: props.themes.text, fontSize: "1.25em" }} class="socials bi bi-linkedin"></i></a>
                    </div>
                    <img src={MAIN} alt="" style={{width:"300px",height:"auto"}} />
                </div>
            </div>
        </>
    )
}

export default Home