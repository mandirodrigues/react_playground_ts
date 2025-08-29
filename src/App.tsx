import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      {isLogged ? (
        <Home 
          userName={userName} 
          onLogout={() => setIsLogged(false)} 
        />
      ) : (
        <Login 
          onLogin={(name) => {
            setUserName(name);
            setIsLogged(true);
          }} 
        />
      )}
    </>
  );
}

export default App;
