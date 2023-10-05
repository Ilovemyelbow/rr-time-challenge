import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  return (
    <div className="App">
      <header className="App-header">
       
       
        <b>{date.toLocaleTimeString()}</b>
      </header>
      <body>

      <div className="snow"></div>
      <div className="dino dino-container">
           <img src="Images/Dino_1.png" alt="" className="dino" />
          <img src="Images/Dino_2.png" alt="" className="dino-2" />

      </div>
   
      <img src="Images/rainbow-png.webp" alt="" className="rainbow" />

      </body>
    </div>
  );
}

export default App;
