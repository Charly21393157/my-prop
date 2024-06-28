import React, { useState, Suspense, lazy } from 'react';
import ModalComponent from './ModalComponent';

const Card = lazy(() => import('./Card'));

const cardData = [
    { title: 'Card 1', imageUrl: 'https://img.freepik.com/vector-gratis/coleccion-elementos-personajes-flat-dia-muertos_23-2149747654.jpg?w=740&t=st=1719536971~exp=1719537571~hmac=f0fe2709c0707bcf399946758831d8abfd850039f3cd43b5ec3bac7df30a8e98' },
    { title: 'Card 2', imageUrl: 'https://img.freepik.com/vector-gratis/hermoso-fondo-patron-dia-muertos_23-2147942282.jpg?w=740&t=st=1719536913~exp=1719537513~hmac=9824cad92920791c60d47fe489e22e132ad945801cdbdb2d74be8d5f5eb0de2f' },
    { title: 'Card 3', imageUrl: 'https://img.freepik.com/vector-gratis/bien-ilustracion-emoji_23-2151315772.jpg?w=740&t=st=1719537031~exp=1719537631~hmac=0002517e3028a69add8845ec95cca8813351158a468c7e10bf725a07fc92e2a4' },
    { title: 'Card 4', imageUrl: 'https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lechuga-dibujada-mano_52683-134139.jpg?w=740&t=st=1719537049~exp=1719537649~hmac=b22c6ba4fde7cc9857becf361c97e9070940cb7b620ce937c40dbc038cd9133c' },
    { title: 'Card 5', imageUrl: 'https://img.freepik.com/vector-gratis/diseno-patron-halloween-degradado_23-2149062571.jpg?w=740&t=st=1719539081~exp=1719539681~hmac=232162c784e70bf8736446dbaa99be0c6f9ebd87d1a3e543fd49cfce3edc0ca3  ' },
  ];  

const CardList: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  const handleCardClick = (title: string) => {
    setSelectedTitle(title);
    setModalOpen(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <Suspense fallback={<div>Loading cards...</div>}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            onClick={() => handleCardClick(card.title)}
          />
        ))}
      </Suspense>
      <ModalComponent
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        title={selectedTitle}
      />
    </div>
  );
};

export default CardList;
