import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  function alterarValor(quantidade: number) {
    setValor(valor + quantidade);
  }

  return (
    <>
      <h1>Componente Contador</h1>
      <p>O valor é: {valor}</p>
      <button onClick={() => alterarValor(-2)}>Remover 2</button>
      <button onClick={() => alterarValor(-1)}>Remover 1</button>
      <button onClick={() => setValor(0)}>Resetar o contador</button>
      <button onClick={() => alterarValor(1)}>Adicionar 1</button>
      <button onClick={() => alterarValor(2)}>Adicionar 2</button>
    </>
  );
}

export default Contador;
