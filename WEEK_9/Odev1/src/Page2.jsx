import './css/Page2.css';
import Yoga from './images/yoga.jpg';
import BMI from './images/bmi-index.jpg'
import React, { useState } from "react";
import Solo from './images/solo.jpg';  // Yeni resminiz burada
import Group from './images/group.webp';  // Yeni resminiz burada
import Strect from './images/stret.webp';  // Yeni resminiz burada
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'


function  Page2(){

     // State'ler: message yazısını ve imageSrc'yi kontrol ediyoruz
    const[title, setTitle]= useState("Why are your Yoga?")
    const[text, settextTitle]= useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
    const[timeTitle, setTimeTitle]= useState('When is Yoga Your Time?')
    const[times, settimes]= useState("Saturday-Sunday: 8.00am-10.00am <br>Monday-Tuesday: 10.00am-12.00am <br>Wednesday-Friday: 3.00pm-6.00pm")
    const [imageSrc, setImageSrc] = useState(Yoga);
    
      // Butona tıklanınca çalışacak fonksiyon
      const YogaButton = () => {
        setTitle("Why are your Yoga?");
        settextTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        setTimeTitle('When is Yoga Your Time?')
        settimes("Saturday-Sunday: 8.00am-10.00am <br>Monday-Tuesday: 10.00am-12.00am <br>Wednesday-Friday: 3.00pm-6.00pm")
        setImageSrc(Yoga);  // Resmi değiştir
      };
      const SoloButton = () =>{
        setTitle("Why Solo Sport?");
        settextTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        setTimeTitle('When is Solo Sport Your Time?')
        settimes('Saturday-Sunday: 8.00am-10.00am <br>Monday-Tuesday: 12.00am-2.00pm <br>Wednesday-Friday: 6.00pm-8.00pm')
        setImageSrc(Solo);  // Resmi değiştir
      }
      const GroupButton = () =>{
        setTitle("Why Group Sport?");
        settextTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        setTimeTitle('When is Group Sport Your Time?')
        settimes('Saturday-Sunday: 8.00am-10.00am <br>Monday-Tuesday: 12.00am-2.00pm <br>Wednesday-Friday: 6.00pm-8.00pm')
        setImageSrc(Group);  // Resmi değiştir
      }
      const StrectingButton = () =>{
        setTitle('Why Stretching?');
        settextTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
        setTimeTitle('When is Stretching Class?')
        settimes('Saturday-Sunday: 10.00am-12.00am <br>Monday-Tuesday: 08.00am-10.00am <br>Wednesday-Friday: 5.00pm-6.00pm')
        setImageSrc(Strect);  // Resmi değiştir
      }

      // BMI States
      const [height, setHeight] = useState('');
      const [weight, setWeight] = useState('');
      const [bmiResult, setBmiResult] = useState(null);
      const [bmiCategory, setBmiCategory] = useState('');
      const [iconTransform, setIconTransform] = useState('');  // Dinamik transform stili

      // BMI Calculation function
    const calculateBMI = (event) => {
    event.preventDefault(); // Prevent form submission
    
    if (!height || !weight) {
      alert("Please enter both height and weight.");
      return;
    }
     // Convert height to meters
     const heightInMeters = height / 100;
     // Calculate BMI
     const bmi = weight / (heightInMeters * heightInMeters);

     // Set BMI Result
    setBmiResult(bmi.toFixed(2));

     // Determine BMI Category
     let category = '';
    let transformStyle = '';  // İkon için transform stili

    if (bmi < 18.5) {
      category = 'Underweight';
      transformStyle = 'translateX(-700%)';  // Sol hareket
    } else if (bmi >= 18.5 && bmi < 24.99) {
      category = 'Normal weight';
      transformStyle = 'translateX(-350%)';
    } else if (bmi >= 25 && bmi < 29.99) {
      category = 'Overweight';
      transformStyle = 'translateX(2px)';  // Sağ hareket
    }else if (bmi >= 30 && bmi < 34.99) {
      category = 'Overweight';
      transformStyle = 'translateX(300%)';  // Sağ hareket
    }else {
      category = 'ExtremlyObesity';
      transformStyle = 'translateX(700%)';  // Sağ hareket
    }

    setBmiCategory(category);
    setIconTransform(transformStyle);  // Ikonun transform stilini güncelliyoruz
  };

     return(
         <>
         <section id="Our-Classes">
             <div className="grey-rectangle"></div>
                <div className="SecondPage-Start">
                <div className="page-titles">
                  <h2>OUR CLASSES</h2>
                  <hr/>
                 <p>
                      Lorem ipsum is not simply random text. it has roots in a piece of classical at
                       Hampden-Sydney Collage
                  </p>
         </div>
      </div>
        {/* 2. Sayfa Butonlar */}
      <div className="SecondPage-btns">
         <button onClick={YogaButton}>Yoga</button>
         <button onClick={GroupButton}>Group</button>
        <button onClick={SoloButton}>Solo</button>
        <button onClick={StrectingButton}>Strecting</button>
     </div>
        {/* 2.sayfa sol üst taraf */}
        <div className="container-2part">
     <div className="secondPage-LeftSide">
         <div className="secondPage-LeftSideContent">
         <h2 style={{color: '#4C4C4C'}}>{title}</h2>
             <p class="secondPage-Paragraph">
                {text}
             </p>
             <br/>
             <h2 style={{color:'#4C4C4C'}}> {timeTitle} </h2>
             <br/>
             <h4 style={{ lineHeight: '30px', marginTop: '-25px', color: '#4C4C4C' }} dangerouslySetInnerHTML={{ __html: times }} >
                
             </h4>
         </div>
     </div>
   
     {/* 2. Sayfa Sağ taraf  */}
     <div class="secondPage-RightSide">
         <img id="image" src={imageSrc} alt="Yoga"/>
     </div>
   </div>
    {/* 2.Sayfa sol Alt taraf  */}
    <div className="container-2part">
     <div className="secondPage-LeftSide2">
         <div class="secondPage-LeftSideContent2">
         <h2 style={{color:'#385394'}}>BMI Calculator</h2>
             <p class="secondPage-Paragraph2">
                 Contrary to popular belief,Lorem ipsum is not simply random text. It has roots in 
                 a piece of classical latin literatue from 45 BC, making it over 2000 years old.
             </p>
             <p className="secondPage-Paragraph2">
                 Contrary to popular belief,Lorem ipsum is not simply random text. It has roots in 
                 a piece of classical latin literatue from 45 BC, making it over 2000 years old.
             </p>
             <form onSubmit={calculateBMI}>
                 <div class="secondPage-Form">
                     <input id="height" type="text" placeholder="Your height"value={height} onChange={(e) => setHeight(e.target.value)}/>cm
                     <input id="weight" type="text" placeholder="Your Weight"value={weight} onChange={(e) => setWeight(e.target.value)}/>kg
                 </div>
                 <div class="calculate-btn">
                 <button type="submit">Calculate</button>
                 </div>
             </form>
            
              {/* BMI RESULT  */}
              {bmiResult && (
                <div id="bmiResult">
                  <h3>Your BMI: {bmiResult}</h3>
                  <h4>Category: {bmiCategory}</h4>
                </div>
              )}
         </div>
     </div>
      {/* 2. Sayfa Sağ alt taraf  */}
     <div  class="secondPage-RightSide">
     <h2 style={{textAlign:'center'}}>YOUR BMI <br/>
         <img src={BMI} alt=""/>
         <br/>
        < FontAwesomeIcon icon={faTriangleExclamation}style={{color:'orange', transform: iconTransform, transition: 'transform 0.5s ease-in-out'}}  />
     </h2>
     </div>
   </div>
</section>
         </>
    )
}
export default Page2