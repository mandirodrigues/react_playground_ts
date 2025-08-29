import { useState } from "react";
import Card from "../card/Card";
import Contador from "../contador/Contador";

interface HomeProps {
  userName: string;
  onLogout: () => void;
}

function Home({ userName, onLogout }: HomeProps) {
  const [showCard, setShowCard] = useState(false);

  const cardFilme = {
    titulo: "Viagem de Chihiro",
    texto: "Filme preferido.",
    img: "https://i.redd.it/lrqunmucohjx.jpg",
  };

  return (
    <>
      <h1>Bem-vindo, {userName}!</h1>

      <button onClick={() => setShowCard(!showCard)}>
        {showCard ? "Ocultar Card" : "Mostrar Card"}
      </button>

      {showCard && (
        <div>
          <h2>Card</h2>
          <Card
            titulo={cardFilme.titulo}
            texto={cardFilme.texto}
            img={cardFilme.img}
          />
        </div>
      )}
      
      <Contador />

      {}
      <div>
        <button onClick={onLogout}>Sair</button>
      </div>
    </>
  );
}

export default Home;

