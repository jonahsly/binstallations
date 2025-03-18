import { useNavigate } from 'react-router-dom';
import './TitleSelectorModal.css';

const titles = [
  { name: 'Instalaciones Sanitarias', path: '/sanitarias', color: '#FF6B6B' },
  { name: 'Instalaciones contra Incendio', path: '/contraincendio', color: '#6BCB77' },
  { name: 'Instalación de Gas', path: '/gas', color: '#4D96FF' },
];

const TitleSelectorModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-carousel">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Selecciona un título</h2>
        <div className="carousel-wheel">
          {titles.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundColor: item.color }}
              onClick={() => handleSelect(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TitleSelectorModal;
