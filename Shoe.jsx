import React from 'react';
import { ShoeData } from '../Data/ShoeData';


const ShoeCollection = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'center', backGroundColor:'black'}}>
      {ShoeData.map((card, index) => (
        <div key={index} style={{ margin: '10px', padding: '20px', height: '300px', border: '1px solid black', boxShadow: 'gray 1px 10px 20px', borderRadius: '20px', color:'pink' }}>
          <img src= {card.image} alt="images"  width={200}/>
          <h2>{card.name}</h2>
          <h3>{card.description}</h3>

        </div>
      ))}
    </div>
  );
}

export default ShoeCollection;
