import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {

    })
    const onClose = () => {
        tg.close()
    }
  return (
    <div className="App">
      <header className="App-header">
          <h1>скоро здесь будут товары (возможно)</h1>
        <button onClick={onClose}>Закрыть</button>
      </header>
    </div>
  );
}

export default App;
