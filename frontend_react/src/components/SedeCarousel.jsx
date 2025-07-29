import React, { useRef, useState, useEffect } from 'react';
import "../styles/SedeCarousel.css"; // el CSS va aparte
import { getCampusList } from "../api/SedesApi";
import { Modal, Button } from 'react-bootstrap';
 

const SedeCarousel = () => {
  const [campuses, setCampuses] = React.useState([]);
  const carouselRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCampusList();
        setCampuses(data);
      } catch (error) {
        console.error("Error al obtener campus:", error);
      }
    };
    fetchData();
  }, []);

  // Mover carrusel según el mouse
  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    const { width, left } = carousel.getBoundingClientRect();
    const x = e.clientX - left;
    const scroll = (x / width) * carousel.scrollWidth - width / 2;
    carousel.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
  };
const handleCardClick = (item) => {
    setSelectedCard(item);
    setShowModal(true);
  };
  return (
    <>
    <div
      className="carousel-container"
      onMouseMove={handleMouseMove}    
      ref={carouselRef}
    >
      {campuses.map((item, index) => (
        <div className="campus-card"
         onClick={() => handleCardClick(item)}
         key={index}>
            <img src={item.image} alt={item.name} width={300}/>
          <h3>{item.name}</h3>
          <p>Código: {item.code}</p>
          <p>Fecha de creación:{item.creationDate}</p>
        </div>
      ))}
    </div>
    <Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>{selectedCard?.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{selectedCard?.description}</Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
        Cerrar
        </Button>
    </Modal.Footer>
    </Modal>
    </>
  );
};

export default SedeCarousel;
