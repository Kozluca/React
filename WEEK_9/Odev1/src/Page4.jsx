import React from "react";
import './css/Page4.css';
import client1 from './images/client1.jpg';
import client2 from './images/client2.jpg';
import logo from './images/logo.png';



function Page4(){
    return(
        <div>
                        <section id="blog">
                        <div className="fourthPage">
                        <div className="page-titles">
                        <h2>REVIEW CLIENT</h2>
                            <hr/>
                            <p style={{ paddingBottom: '50px' }}>
                                    Lorem ipsum is not simply random text. it has roots in a piece of classical at
                                    Hampden-Sydney Collage
                                </p>
                    </div>
                
                                {/* <!-- rewiev client --> */}
                        <div className="comments"  >
                            <div className="comment">
                                {/* <!-- sol taraf --> */}
                            <div class="comment1">
                                <img src={client1} alt="client1"/>
                                <h2>
                                    Diet Expert <br/> CFO
                                </h2>
                            </div>
                            <div className="container-paragraph">
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis accusantium libero voluptatem dolores minus voluptate quis dicta vero earum consequuntur repudiandae id totam, praesentium porro? Adipisci soluta itaque tempore vel.
                                </p>
                            </div>
                            <div className="clippaths" style={{ display: 'flex' }}>
                                <div className="clip-rectangle-1"></div>
                            <div  className="clip-rectangle-2"></div>
                            </div>
                        </div>
                        <div className="comment9">
                            {/* <!-- sağ taraf --> */}
                            <div className="comment2">
                                <img src={client2} alt="client2"/>
                                <h2>Cardio Trainer <br/>CEO</h2>
                            </div>
                            <div className="container-paragraph">
                                <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis accusantium libero voluptatem dolores minus voluptate quis dicta vero earum consequuntur repudiandae id totam, praesentium porro? Adipisci soluta itaque tempore vel.
                                </p>
                            </div>
                            <div className="clippaths" style={{ display: 'flex' }}>
                                <div className="clip-rectangle-1"></div>
                            <div  className="clip-rectangle-2"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                {/* <!-- contact us --> */}
            <div >
                <section id="Contact-Us">
                <div class="page-titles">
                <h2>CONTACT US</h2>
                    <hr/>
                        <p>
                            Lorem ipsum is not simply random text. it has roots in a piece of classical at
                            Hampden-Sydney Collage
                        </p>
                </div>
                </section>
            </div>

            <div className="information">
          <div className="düz">
              <div className="Mobile-Number" style={{display:'flex'}}>
                  <h2>Mobile Number</h2>
                  <div style={{marginLeft:'10px'}}>
                      <h2>
                          Email Adress
                      </h2>
                  </div>
              </div>
              <div className="Mobile-Number" >
                  <h3>+125 5478 98 65</h3>
                  <div style={{marginLeft:'45px'}}>
                      <h3>Demo@demo.com</h3>
                  </div>
              </div>
              <div style={{marginTop:'-20px'}}>
                  <h2>Make An Appointment</h2>
              </div>
              {/* <!-- forms --> */}
              <form className="Last-forms">
                  <div >
                      <input type="text"placeholder="mobile Number"/>
                  </div>
                  <div>
                      <input type="text" placeholder="Email Adress"/>
                  </div>
                  <div>
                      <textarea type="text" placeholder="Your Message"></textarea>
                  </div>
              </form>
          </div>
          {/* <!-- Map --> */}
          <div>
              <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49789.00837566276!2d28.82478212655945!3d38.74505266956242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7e331b0779b09%3A0xf5fd806961b9e30!2sSelendi%2C%20Manisa!5e0!3m2!1str!2str!4v1741280456461!5m2!1str!2str"
                   width="600" height="450"  style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
      </div>

      {/* <!-- footer --> */}
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eius consequatur repudiandae temporibus laborum! Aliquid commodi hic harum animi. Maxime, sapiente molestiae. Laborum possimus debitis ut error numquam minus rem fugiat eos fugit alias eaque, repudiandae animi! Error, doloremque at?
            </p>
        </div>

    
    <div className="footer-links">
        <ul>
            <h2 >Information</h2>
            <li><a href="#Home">About Us</a></li>
            <li><a href="#Our-Classes">Classes</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#Contact-Us">Contact</a></li>
           
        </ul>
        <ul>
            <h2>HELPFUL lİNKS</h2>
            <li><a href="#">Services</a></li>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Team &  Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
        </ul>
    </div>
</div>
        </div>
         
    )
}
export default Page4