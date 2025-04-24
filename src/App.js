import introScene1 from './components/Intro-Page-1.png';
import introScene2 from './components/Intro-Page-2.png';
import closet from './components/Closet.png';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const images = [introScene1, introScene2];
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  //auto switches between two intro scenes
  useEffect(() => {
    if (clicked) return;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 600);
    
    return () => clearInterval(interval);
  }, [clicked])

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="Miffy-scene" onClick={handleClick}>
      <img src={clicked ? closet : images[index]} alt="scenes"/>
    </div>
  );
}

export default App;
