import React from "react";
import './css/Page3.css';
import Trainer1 from './images/trainer1.jpg'
import Trainer2 from './images/trainer2.jpg'
import Trainer3 from './images/trainer3.jpg'
import Purchase1 from './images/purchase1.jpg'
import Purchase2 from './images/purchase2.jpg'
import Purchase3 from './images/purchase3.jpg'
import Purchase4 from './images/purchase4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Page3(){
    return(
        <div>
              {/* 3.sayfa  */}
     <section >
    <div className="container-thirdpage">
      <div className="page-titles">
          <h2>OUR Best Trainers</h2>
              <hr/>
                  <p>
                     Lorem ipsum is not simply random text. it has roots in a piece of classical at
                     Hampden-Sydney Collage
                  </p>
     </div>
      <div className="container-3part">
           {/* sol taraf  */}
          <div className="image-container">
              <img src={Trainer1} alt="Resim"/>
              <div class="trainerInformation">Jane Doe <br/> Yoga trainer</div>
          </div>
          {/* <!-- orta kısım --> */}
          <div className="image-container">
              <img src={Trainer2} alt="Resim"/>
              <div className="trainerInformation">James Snow <br/> Body trainer</div>
          </div>
          {/* <!-- sağ taraf --> */}
          <div className="image-container">
              <img src={Trainer3} alt="Resim"/>
              <div className="trainerInformation">Jane Doe <br/> Cardio trainer</div>
          </div>
      </div>
   </div>
</section>
{/* <!-- 3. sayfa 2. kısım --> */}
   <div className="page-titles">
      <h2>PURSCHACE FROM US</h2>
          <hr/>
              <p>
                 Lorem ipsum is not simply random text. it has roots in a piece of classical at
                 Hampden-Sydney Collage
              </p>
  </div>
    {/* <!-- purchase fromus --> */}
  <div className="container-cards" >
      {/* <!-- ilk resim --> */}
      <div class="card-container">
          <div className="card">
            <img src={Purchase1} alt="trainer1"/>
            <div className="card-content">
              <h3>Kettlebell / 5kg</h3>
              <h4><span>89.99$ </span>/ 59.99$</h4>
              <p>
              <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'30px'}}/>
                  Add to Card
              </p>
            </div>
          </div>
      </div>
      {/* <!-- ikinci resim --> */}
      <div className="card-container">
          <div className="card">
            <img src={Purchase2} alt="trainer1"/>
            <div className="card-content">
              <h3>Treadmil</h3>
              <h4><span>899.99$ </span>/ 599.99$</h4>
              <p >
              <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'30px'}}/>
                  Add to Card 
              </p>
            </div>
          </div>
      </div>
       {/* <!-- üçüncü resim --> */}
       <div className="card-container">
          <div className="card">
            <img src={Purchase3} alt="trainer1"/>
            <div className="card-content">
              <h3>Adjustable Dumbell</h3>
              <h4><span>89.99$ </span>/ 59.99$</h4>
              <p>
              <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'30px'}}/>
                  Add to Card
              </p>
            </div>
          </div>
      </div>
      {/* <!-- dördüncü resim --> */}
      <div className="card-container">
          <div className="card">
            <img src={Purchase4} alt="trainer1"/>
            <div className="card-content">
              <h3>Kettlebell / 3kg</h3>
              <h4><span>89.99$ </span>/ 59.99$</h4>
              <p>
              <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'30px'}}/>
                  Add to Card
              </p>
            </div>
          </div>
      </div>
  </div>
        </div>
    )
}

export default Page3