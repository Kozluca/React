import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ===== STARSHIP KART BİLEŞENİ =====
// Her bir gemi için kart oluşturan alt bileşen
// Link ile detay sayfasına yönlendirme yapar
const StarshipCard = ({ starship, index }) => (
  <Link 
    to={`/starship/${index + 1}`} 
    key={starship.name} 
    className="starship-card"
  >
    <h3>{starship.name}</h3>
    <p>Model: {starship.model}</p>
    <div className="speed-container">
      <p>Max Speed: {starship.max_atmosphering_speed}</p>
      <span className="material-icons">speed</span>
    </div>
  </Link>
);

// ===== STARSHIP LİSTE BİLEŞENİ =====
// Tüm uzay gemilerinin listesini gösteren ana bileşen
// Arama terimine göre filtreleme yapar
const StarshipList = ({ searchTerm }) => {
  // ===== STATE TANIMLAMALARI =====
  // starships: Tüm gemi verilerini tutan state
  // loading: Yükleme durumunu kontrol eden state
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);

  // ===== VERİ ÇEKME İŞLEMİ =====
  // Bileşen yüklendiğinde tüm gemileri çeker
  useEffect(() => {
    fetchAllStarships();
  }, []);

  // ===== TÜM GEMİLERİ ÇEKME FONKSİYONU =====
  // API'den tüm sayfalardaki gemileri çeker
  // Tekrar eden gemileri filtreler
  const fetchAllStarships = async () => {
    setLoading(true);
    try {
      let allStarships = [];
      let nextUrl = 'https://swapi.py4e.com/api/starships/';
      
      // Tüm sayfaları döngü ile gezer
      while (nextUrl) {
        const response = await axios.get(nextUrl);
        allStarships = [...allStarships, ...response.data.results];
        nextUrl = response.data.next;
      }
      
      // Tekrar eden gemileri filtrele
      const uniqueStarships = allStarships.filter((starship, index, self) =>
        index === self.findIndex((s) => s.name === starship.name)
      );
      
      setStarships(uniqueStarships);
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
    setLoading(false);
  };

  // ===== ARAMA FİLTRELEME =====
  // Gemi adı veya modeline göre filtreleme yapar
  const filteredStarships = starships.filter(starship => 
    starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ===== ANA GÖRÜNÜM =====
  // Yükleme durumuna göre ya loading mesajı ya da gemi listesini gösterir
  return (
    <div className="starship-list">
      {loading ? (
        <div className="loading">Loading starships...</div>
      ) : (
        <div className="starships-grid">
          {filteredStarships.map((starship, index) => (
            <StarshipCard 
              key={starship.name}
              starship={starship}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StarshipList; 