import { useState } from 'react'
import './App.css'
import Dice1 from './images/dice1.png'
import Dice2 from './images/dice2.png'
import Dice3 from './images/dice3.png'
import Dice4 from './images/dice4.png'
import Dice5 from './images/dice5.png'
import Dice6 from './images/dice6.png'


function App() {
 
const [Number1, setNumber1]=useState(null)
const [Number2, setNumber2]=useState(null)
const [resultInformation, setResultInformation] = useState('Oyuna Başla!'); 
const [isRolling, setIsRolling] = useState(false); // Animasyon kontrolü
  const [currentNumber1, setCurrentNumber1] = useState(1); // Animasyondaki zar 1
  const [currentNumber2, setCurrentNumber2] = useState(1); // Animasyondaki zar 2
 
   // Zar görseli almak için fonksiyon
   const getDiceImage = (number) => {
    switch (number) {
      case 1:
        return Dice1;
      case 2:
        return Dice2;
      case 3:
        return Dice3;
      case 4:
        return Dice4;
      case 5:
        return Dice5;
      case 6:
        return Dice6;
      default:
        return Dice1;
    }
  };

  const dicleResult = () => {
    setIsRolling(true); // Animasyonu başlat
    let rollCount = 0;
    
    // 3 saniye boyunca zarların yüzlerini değiştirelim
    const rollInterval = setInterval(() => {
      setCurrentNumber1(Math.floor(Math.random() * 6) + 1); // Zar 1'in animasyon yüzünü değiştir
      setCurrentNumber2(Math.floor(Math.random() * 6) + 1); // Zar 2'nin animasyon yüzünü değiştir
      rollCount += 1;
      
      if (rollCount >= 30) { // 3 saniye için yaklaşık 30 defa güncelleme
        clearInterval(rollInterval);
        
        // Sonuçları belirleyelim
        const result1 = Math.floor(Math.random() * 6) + 1;
        const result2 = Math.floor(Math.random() * 6) + 1;
        setNumber1(result1);
        setNumber2(result2);
        
        // Sonuçları kontrol et ve mesajı ayarla
        if (result1 > result2) {
          setResultInformation(`kazanan ${name}`);
        } else if (result1 === result2) {
          setResultInformation('Berabere');
        } else {
          setResultInformation('Kazanan PC');
        }

        setIsRolling(false); // Animasyonu durdur
      }
    }, 100); // Zarları her 100ms'de bir değiştir
  };

  const [name, setName] = useState('player');
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Butona tıklandığında input'tan alınan değeri name'e atıyoruz
    setName(inputValue);
  };



  return (
    <>
     <div className='resultInformation'>
     <h1>{resultInformation}!</h1>
     </div>
     <div className='resultInformation2'>
      <h2>{name}</h2>
      <h2>Player2</h2>
     </div>
     <div className='resultImage'>
     {isRolling ? (
    <>
      <img src={getDiceImage(currentNumber1)} alt={`Dice ${currentNumber1}`} />
      <img src={getDiceImage(currentNumber2)} alt={`Dice ${currentNumber2}`} />
    </>
  ) : (
    <>
      <img src={getDiceImage(Number1)} alt={`Dice ${Number1}`} />
      <img src={getDiceImage(Number2)} alt={`Dice ${Number2}`} />
    </>
  )}
     </div>
     <div className='Button'>
      <button onClick={dicleResult}>Zar At</button>
      
     </div>
     <div>
     {Number1 && Number2 && (
    <div className='DicleResult'>
      <h2>Oyuncunun Zarı : {Number1}</h2>
      <h2>Pc Zarı: {Number2}</h2>
    </div>
  )}
        
     </div>
     <div className='DicleResult'>
     <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Yeni ismini yaz"
      />
       <button onClick={handleClick}>İsmi Değiştir</button>
     </div>
    </>
  )
}

export default App
