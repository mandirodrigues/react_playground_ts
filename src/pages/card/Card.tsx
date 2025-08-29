import React from "react";

interface CardProps {
  titulo: string;
  texto: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ titulo, texto, img }) => {
  return (
    <>
      {img && <img src={img} alt={titulo} />}
      <h3>{titulo}</h3>
      <p>{texto}</p>
      <hr />
    </>
  );
};

export default Card;
