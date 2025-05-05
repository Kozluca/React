import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// ===== STARSHIP DETAY BİLEŞENİ =====
// Bu bileşen, seçilen bir uzay gemisinin detaylı bilgilerini görüntüler
// API'den gelen verileri kullanarak geminin tüm özelliklerini gösterir

const StarshipDetail = () => {
  // ===== STATE YÖNETİMİ =====
  // useParams hook'u ile URL'den gemi ID'sini alır
  // starship state'i ile gemi verilerini tutar
  // loading state'i ile yükleme durumunu kontrol eder
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===== VERİ ÇEKME İŞLEMİ =====
  // useEffect hook'u ile bileşen yüklendiğinde API'den veri çeker
  // fetchStarshipDetails fonksiyonu asenkron olarak çalışır
  // try-catch bloğu ile hata yönetimi yapılır
  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        // API'den gemi detaylarını çeker
        const response = await axios.get(`https://swapi.py4e.com/api/starships/${id}/`);
        // Gelen veriyi state'e kaydeder
        setStarship(response.data);
      } catch (error) {
        // Hata durumunda konsola hata mesajı yazdırır
        console.error('Error fetching starship details:', error);
      }
      // İşlem bittiğinde loading durumunu false yapar
      setLoading(false);
    };

    // Veri çekme fonksiyonunu çağırır
    fetchStarshipDetails();
  }, [id]); // id değiştiğinde useEffect tekrar çalışır

  // ===== YÜKLEME DURUMU KONTROLÜ =====
  // Eğer veri yükleniyorsa loading mesajı gösterir
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // ===== HATA KONTROLÜ =====
  // Eğer gemi verisi yoksa hata mesajı gösterir
  if (!starship) {
    return <div className="error">Starship not found</div>;
  }

  // ===== DETAY GÖRÜNÜMÜ =====
  // Gemi detaylarını grid yapısında gösterir
  // Her bir özellik için ayrı bir kart oluşturur
  return (
    <div className="starship-detail">
      <div className="detail-card">
        <h2>{starship.name}</h2>
        <div className="detail-grid">
          {/* ===== GEMİ ÖZELLİKLERİ ===== */}
          {/* Her bir özellik için ayrı bir kart oluşturur */}
          <div className="detail-item">
            <span className="detail-label">Model:</span>
            <span className="detail-value">{starship.model}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Manufacturer:</span>
            <span className="detail-value">{starship.manufacturer}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Max Atmosphering Speed:</span>
            <div className="speed-container">
            <span className="detail-value">{starship.max_atmosphering_speed}</span>
              <span className="material-icons">speed</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Crew:</span>
            <div className="crew-container">
            <span className="detail-value">{starship.crew}</span>
              <span className="material-icons">groups</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Passengers:</span>
            <div className="passengers-container">
            <span className="detail-value">{starship.passengers}</span>
              <span className="material-icons">airline_seat_recline_extra</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Cargo Capacity:</span>
            <div className="cargo-container">
            <span className="detail-value">{starship.cargo_capacity}</span>
              <span className="material-icons">inventory_2</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Consumables:</span>
            <div className="consumables-container">
            <span className="detail-value">{starship.consumables}</span>
              <span className="material-icons">event</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Hyperdrive Rating:</span>
            <div className="hyperdrive-container">
            <span className="detail-value">{starship.hyperdrive_rating}</span>
              <span className="material-icons">trending_up</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">MGLT:</span>
            <div className="mglt-container">
            <span className="detail-value">{starship.MGLT}</span>
              <span className="material-icons">schedule</span>
            </div>
          </div>
          <div className="detail-item">
            <span className="detail-label">Starship Class:</span>
            <span className="detail-value">{starship.starship_class}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail; 