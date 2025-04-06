import React from "react";
import './css/Page1.css';
import logo from './images/logo.png'
import arkaplan from './images/hero-man.jpg'



function Page1(){

// Hamburger menüsünü açma / kapama işlemi
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

    return(
        <>
      
       <section className="home-Page" id="Home" style={{ backgroundImage: `url(${arkaplan})` }}>
        <nav class="navbar">
            <div class="HomePage-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="hamburger"id="hamburger">
              <div></div>
              <div></div>
              <div></div>
          </div>

          <div>
              <ul className="nav-links"id="navLinks">
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#Our-Classes">Classes</a></li>
                  <li><a href="#Our-Best-Trainers">Trainer</a></li>
                  <li><a href="#blog">Review</a></li>
                  <li><a href="#Contact-Us">Contact</a></li>
                  <li><a href="#">Join Us</a></li>
              </ul>
           </div>
        </nav>

        <div className="HomePage-Content">
        <h3 >POWERFULL</h3>
        <h2>Group<br /> Parctice <br /> With Trainers</h2>
        <div className="HomePage-Paragraph">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptates perspiciatis repella
                      t sint odio eius odit totam perferendis, laboriosam illo nam amet tempore earum harum possimus 
                      aliquam officiis ea! Accusantium!
                  </p>
              </div>
              <div className="HomePage-Btn">
                  <button>Sign-Up</button>
                  <button id="btn-details">Details</button>
              </div>
        </div>
        </section>

        <div className="HomePage-Boxes">
       <div className="box-1">
              <h2>325</h2>
          <p>Course </p>
      </div>
      <div className="box-1">
              <h2>405</h2>
          <p>Work Out </p>
      </div>
          <div className="box-1">
              <h2>305</h2>
          <p>Working Hour </p>
      </div>
      <div className="box-1">
              <h2>705</h2>
          <p>Happy Client </p>
      </div>
   </div>
   
        </>
    )
}

export default Page1