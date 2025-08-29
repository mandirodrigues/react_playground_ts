import { useState } from "react";

interface LoginProps {
  onLogin: (name: string) => void;
}

function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const entrar = () => {
    if (name && password) {
      onLogin(name);
    } else {
      alert("Preencha ambos os campos!");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button onClick={entrar}>Entrar</button>
      <p>Digite qualquer senha</p>
    </>
  );
}

export default Login;
