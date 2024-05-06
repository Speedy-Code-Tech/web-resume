import React, { useEffect, useRef, useState } from 'react'
import Pic from '../assets/mian.png'
import html from '../assets/logo/html-5.png'
import css from '../assets/logo/css-3.png'
import js from '../assets/logo/js.png'
import java from '../assets/logo/java.png'
import php from '../assets/logo/php.png'
import laravel from '../assets/logo/laravel.png'
import bootstrap from '../assets/logo/bootstrap.png'
import jquery from '../assets/logo/jquery.jpg'
import mysql from '../assets/logo/MySQL-Logo.png'
import firebase from '../assets/logo/firebase.png'
import arduino from '../assets/logo/arduino.png'
import git from '../assets/logo/git.png'
import pnsc from '../assets/logo/pnsc.png'
import wsc from '../assets/logo/worldskill.png'
import camsur from '../assets/skilldemocamsur.jpg'
import camnorte from '../assets/skilldemocamnorte.jpg'
import tesda from '../assets/tesdacert.png'
import freecodecamp from '../assets/freecodecert.png'



function About(props) {

  const theme = props.ThemesKo.main
  return (
    <>
      <div className="boxes container-fluid m-0" id="about" style={{ background: theme }}>
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>ABOUT ME</div>
        <hr className="text-white p-0 m-0 mx-3" />
        <div className="container-fluid d-flex p-4 flexs">
          <div style={{lineHeight: '200%', fontSize:'1.25rem'}} className="p-3 container d-flex justify-content-center  align-items-center text-white">
           
Hello there! I'm John Jester Hagupit Salen, born on March 27, 2003, and proudly residing in Purok 4a, Brgy Dalas, Labo Camarines Norte. Currently, I'm a dedicated 3rd-year student pursuing a degree in Computer Science at Mabini Colleges Inc.

My journey in the world of technology has been nothing short of exhilarating. With a passion for innovation and a penchant for problem-solving, I've honed my skills in various domains, specializing in Web Development, App Development, and Embedded Development.

As a budding technologist, I'm constantly exploring new frontiers and pushing the boundaries of what's possible in the digital landscape. Whether it's crafting immersive web experiences, developing intuitive mobile applications, or tinkering with embedded systems, I thrive on the challenges that come with turning ideas into reality.
          </div>
          <div className="container d-flex justify-content-center align-items-center ">
            <img src={Pic} alt="" className='img-fluid' style={{ width: "70%" }} />
          </div>
        </div>
        <hr className='text-warning' />
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>EDUCATION</div>
        <div className="container-fluid p-4">
          <div className="row align-items-start py-2 educ">
            <div className="school col d-flex justify-content-center align-items-center flex-column">
              <p className=' fw-bold m-0' style={{ fontSize: "1.5em" }}>COLLEGE</p>
              <i className="bi bi-buildings" style={{ fontSize: "4em" }}></i>
              <hr className=" p-0 m-0" />
              <p className='m-0 p-0'>2021 - Present</p>
              <i className='m-0 p-0'>Bachelor of Science in Computer Science</i>
              <strong className='m-0 p-0'>Mabini Colleges Inc.</strong>
            </div>
            <div className="school col d-flex justify-content-center align-items-center flex-column">
              <p className='fw-bold m-0' style={{ fontSize: "1.5em" }}>SENIOR HIGH SCHOOL</p>
              <i className="bi bi-backpack4 " style={{ fontSize: "4em" }}></i>
              <hr className=" p-0 m-0" />
              <p className='m-0 p-0'>2019 - 2021</p>
              <i className='m-0 p-0 text-center'>Science Technology Engineering and Mathematics <br /> - With Honors</i>
              <strong className='m-0 p-0'>Labo Science and Technology High School</strong>

            </div>
            <div className="school col d-flex justify-content-center align-items-center flex-column">
              <p className='fw-bold m-0' style={{ fontSize: "1.5em" }}>JUNIOR HIGH SCHOOL</p>
              <i className="bi bi-backpack    " style={{ fontSize: "4em" }}></i>
              <hr className="p-0 m-0" />
              <p className='m-0 p-0'>2015 - 2019</p>
              <strong className='m-0 p-0'>Labo Science and Technology High School</strong>
            </div>

          </div>
          <div className="row align-items-start py-2 pt-5 educ">
            <div className="school col d-flex justify-content-center align-items-center flex-column">
              <p className='fw-bold m-0' style={{ fontSize: "1.5em" }}>ELEMENTARY</p>
              <i className="bi bi-house " style={{ fontSize: "4em" }}></i>
              <hr className=" p-0 m-0" />
              <p className='m-0 p-0'>2009 - 2015</p>
              <strong className='m-0 p-0'>Labo Elementary School</strong>
            </div>
            <div className="school col d-flex justify-content-center align-items-center flex-column">
              <p className='fw-bold m-0' style={{ fontSize: "1.5em" }}>TECHVOC</p>
              <i className="bi bi-building " style={{ fontSize: "4em" }}></i>
              <hr className=" p-0 m-0" />
              <p className='m-0 p-0'>2023</p>
              <i className='m-0 p-0 text-center'>Electronics Product Assembly and Servicing </i>
              <strong className='m-0 p-0'>Mabini Colleges Inc.</strong>

            </div>
          </div>
        </div>
        <hr className='text-warning' />
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>SKILLS</div>
        <div className="container-fluid d-flex flex-wrap justify-content-center ">

          <img src={html} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={css} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={js} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={java} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={php} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={laravel} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={bootstrap} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={jquery} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={mysql} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={firebase} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={arduino} alt="" className='p-5' style={{ width: "200px" }} />
          <img src={git} alt="" className='p-5' style={{ width: "200px" }} />
        </div>
        <hr className='text-warning' />
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>AWARDS</div>
        <div className="container-fluid p-5">
          <div className="rows row d-flex btns" data-bs-toggle="modal" data-bs-target="#modalId">
            <div className="w-25 d-flex">
              <img src={pnsc} alt="" className="img-fluid" />

            </div>
            <div className="w-75 d-flex ">
              <div className="container-fluid d-flex flex-column">
                <h3 className='text-white fw-bold p-0 m-0'>PNSC NATIONAL SKILLS COMPETITION 6<sup>th</sup> PLACER</h3>
                <h3 className="text-white p-0 m-0" ><i>WEB TECHNOLOGIES</i></h3>
                <h5 className='text-white'>TESDA | March 27 - 31, 2023</h5>
              </div>
            </div>
            <br />
            <hr className="text-white" />

          </div>
          <div className=" row d-flex  btns rows" data-bs-toggle="modal" data-bs-target="#modalId1">
            <div className="w-25 d-flex">
              <img src={wsc} alt="" className="img-fluid" />

            </div>
            <div className="w-75 d-flex ">
              <div className="container-fluid d-flex flex-column">
                <h3 className='text-white fw-bold p-0 m-0'>RSC REGIONAL SKILLS COMPETITION GOLD MEDALIST</h3>
                <h3 className="text-white p-0 m-0" ><i>ELECTRONICS</i></h3>
                <h5 className='text-white'>TESDA | December 05 - 07, 2023</h5>
              </div>
            </div>
            <br />
            <hr className="text-white" />
          </div>
        </div>
        <hr className='text-warning' />
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>EXPERIENCE</div>
        <div className="container-fluid p-3">
          <div className="container-fluid pt-4 d-flex flexs1">
            <div className="container">
              <img src={camsur} alt="" className="img-fluid img-thumbnail" />
            </div>
            <div className="container-fluid pt-4">
              <h4 className='text-end text-white'>TESDA SKILLS DEMONSTRATION</h4>
              <h5 className='text-end text-white'>NABUA, CAMARINES SUR | SEPTEMBER 23 - 24, 2023</h5>
              <hr className="text-white ps-5" />
              <p className="text-end text-white">
                At the Serbisyo Fair, I showcased my Expertise in the electronics category through Skills Demonstration. I highlighted my proficiency in various areas including Obstacle Avoidance Car using Arduino, creating a 4x4x4 LED Cube, implementing a Clap-Activated Sound Sensor, and STM32 Embedded Programming.
              </p>
            </div>
          </div>
          <div className="container-fluid pt-4 d-flex flexs1">
            <div className="container">
              <img src={camnorte} alt="" className="img-fluid img-thumbnail" />
            </div>
            <div className="container-fluid pt-4">
              <h4 className='text-end text-white'>TESDA SKILLS DEMONSTRATION</h4>
              <h5 className='text-end text-white'>DAET, CAMARINES NORTE | MAY 1, 2024</h5>
              <hr className="text-white ps-5" />
              <p className="text-end text-white">

                On Labor Day, I celebrated the spirit of innovation with a showcase featuring an Obstacle Avoidance Car driven by Arduino, a vibrant 4x4 LED Cube, and demonstrations of STM32 Embedded Programming. An 8x8 LED DOT Matrix With DOLE Display. Additionally, I demonstrated the utility of an Ultrasonic Range Finder and showcased a Sequential Light display using the CD4017 IC. This showcase highlighted the fusion of technology and creativity, honoring the contributions of workers while inspiring others to explore the possibilities of electronics.
              </p>
            </div>
          </div>
        </div>
        <hr className='text-warning' />
        <div className="h2 m-0 p-3" style={{ color: props.ThemesKo.subText }}>CERTIFICATIONS</div>
        <div className="container-fluid p-4">
        </div>
        <div className="container-fluid pt-4 d-flex flexs1">
          <div className="container-fluid pt-4">
            <h4 className='text-start text-white'>RESPONSIVE WEB DESIGN</h4>
            <h5 className='text-start text-white'>freeCodeCamp | January 12, 2023</h5>
            <hr className="text-white ps-5" />
            <p className="text-start text-white">


            </p>
          </div>
          <div className="container imgs">
            <img src={freecodecamp} alt="" className="img-fluid img-thumbnail w-75" />
          </div>
        </div>
        <div className="container-fluid pt-4 d-flex flexs1">
          <div className="container-fluid pt-4">
            <h4 className='text-start text-white'>ELECTRONICS PRODUCT ASSEMBLY AND SERVICING NCII PASSER</h4>
            <h5 className='text-start text-white'>TESDA | December 28, 2023</h5>
            <hr className="text-white ps-5" />
            <p className="text-start text-white">


            </p>
          </div>
          <div className="container imgs">
            <img src={tesda} alt="" className="img-fluid img-thumbnail w-75" />
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="modalId"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"

        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"

      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm modal-md modal-lg"
          role="document"
        >
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                PNSC NATIONAL SKILLS COMPETITION
              </h5>
              <button

                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center"  >

              <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrian.dioneda%2Fposts%2Fpfbid02uX15QFYRgE16UfiDBTMAHgj6z6h6oH3G7cnSZyMiD2bgBR42XRJaj9XWHrZ8HAx2l&show_text=true&width=500&is_preview=true" style={{ border: "none", overflow: "hidden", width: "500px", height: "690px" }}
                allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>

          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalId1"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"

        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"

      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm modal-md modal-lg "
          role="document"
        >
          <div className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                RSC REGIONAL SKILLS COMPETITION
              </h5>
              <button

                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-center"  >

              <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjohnjester.salen%2Fposts%2Fpfbid026Ni484F662EZmXVM79iM3hx6E5GvG9F24V8Ls2iqQwTbdWRMSkJAJ4xs4PojUKNVl&show_text=true&width=500&is_preview=true" style={{ border: "none", overflow: "hidden", width: "500px", height: "690px" }}
                allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>

          </div>
        </div>
      </div>
      <script>
        const myModal = new bootstrap.Modal(
        document.getElementById("modalId"),
        options,
        );
        const myModal = new bootstrap.Modal(
        document.getElementById("modalId1"),
        options,
        );
      </script>

    </>
  )

}

export default About