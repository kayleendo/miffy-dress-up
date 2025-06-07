import introScene1 from './components/Intro-Page-1.png';
import introScene2 from './components/Intro-Page-2.png';
import closet from './components/Closet.png';
import endScene1 from './components/End-Scene-1.png';
import endScene2 from './components/End-Scene-2.png';

import leftArrowAccessories from './components/Left-Arrow.png';
import rightArrowAccessories from './components/Right-Arrow.png';
import leftArrowShirt from './components/Left-Arrow.png';
import rightArrowShirt from './components/Right-Arrow.png';
import leftArrowSkirt from './components/Left-Arrow.png';
import rightArrowSkirt from './components/Right-Arrow.png';
import leftArrowShoe from './components/Left-Arrow.png';
import rightArrowShoe from './components/Right-Arrow.png';

import shirt1 from './components/Shirts/Shirt1.png';
import shirt2 from './components/Shirts/Shirt2.png';
import shirt3 from './components/Shirts/Shirt3.png';

import skirt1 from './components/Skirts/Skirt1.png';
import skirt2 from './components/Skirts/Skirt2.png';
import skirt3 from './components/Skirts/Skirt3.png';

import accessory1 from './components/Accessories/Face Accessory 1.png';
import accessory2 from './components/Accessories/Face Accessory 2.png';
import accessory3 from './components/Accessories/Face Accessory 3.png';

import shoe1 from './components/Shoes/Shoes 1.png';
import shoe2 from './components/Shoes/Shoes 2.png';
import shoe3 from './components/Shoes/Shoes 3.png';

import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const introImages = [introScene1, introScene2];
  const endImages = [endScene1, endScene2];
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [enter, setEnter] = useState(false);

  const accessories = [accessory1, accessory2, accessory3];
  const [accessoryIndex, setAccessoryIndex] = useState(0);

  const shirts = [shirt1, shirt2, shirt3];
  const [shirtIndex, setShirtIndex] = useState(0);

  const skirts = [skirt1, skirt2, skirt3];
  const [skirtIndex, setSkirtIndex] = useState(0);

  const shoes = [shoe1, shoe2, shoe3];
  const [shoeIndex, setShoeIndex] = useState(0);

  //auto switches between two intro scenes
  useEffect(() => {
    const handleEnterDown = (event) => {
      if (event.key === 'Enter'){
        if (clicked && !enter){
          setEnter(true);
        } else if (enter) {
          setClicked(false);
          setEnter(false);
          setIndex(0);
        }
      }}

    window.addEventListener('keydown', handleEnterDown);

    let interval;

    if (!clicked && !enter) {
      interval = setInterval(() => {
        setIndex(prev => (prev + 1) % introImages.length);
      }, 600);
      setAccessoryIndex(0);
      setShirtIndex(0);
      setSkirtIndex(0);
      setShoeIndex(0);
    }

    if (clicked && enter) {
      interval = setInterval(() => {
        setIndex(prev => (prev + 1) % endImages.length);
      }, 600);
    }

    return () => {
      window.removeEventListener('keydown', handleEnterDown)
      if (interval) clearInterval(interval);
    };
  }, [clicked, enter]);

  //handles switching to closet scene when user clicks
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    }};

  //handles left and right shirt arrow click
  const leftShirtArrowClick = () => {
    setShirtIndex((prev) => (prev - 1 + shirts.length) % shirts.length);
  }

  const rightShirtArrowClick = () => {
    setShirtIndex((prev) => (prev + 1 + shirts.length) % shirts.length);
  }

  //handles left and right skrit arrow click
  const leftSkirtArrowClick = () => {
    setSkirtIndex((prev) => (prev - 1 + skirts.length) % skirts.length);
  }

  const rightSkirtArrowClick = () => {
    setSkirtIndex((prev) => (prev + 1 + skirts.length) % skirts.length);
  }

  //handles left and right accessory arrow click
  const leftAccessoryArrowClick = () => {
    setAccessoryIndex((prev) => (prev - 1 + accessories.length) % accessories.length);
  }

  const rightAccessoryArrowClick = () => {
    setAccessoryIndex((prev) => (prev + 1 + accessories.length) % accessories.length);
  }

  //handles left and right shoe arrow click
  const leftShoeArrowClick = () => {
    setShoeIndex((prev) => (prev - 1 + shoes.length) % shoes.length);
  }

  const rightShoeArrowClick = () => {
    setShoeIndex((prev) => (prev + 1 + shoes.length) % shoes.length);
  }


  return (
    <div className="Miffy-scene" onClick={handleClick}>
      <img src={enter ? endImages[index] : clicked ? closet : introImages[index]} alt="scenes"/>
      
      {clicked && !enter && (
        <div className="closet-scene">
          <div className='accessory-container'>
            <img className="leftAccessoryArrow" src={leftArrowAccessories} alt="left-accessory-arrow" style={{opacity: 1}} onClick={leftAccessoryArrowClick}/>
            <img className="accessories" src={accessories[accessoryIndex]}/>
            <img className="rightAccessoryArrow" src={rightArrowAccessories} alt="right-accessory-arrow" style={{opacity: 1}} onClick={rightAccessoryArrowClick}/>
          </div>
          <div className="shirt-container">
            <img className="leftShirtArrow" src={leftArrowShirt} alt="left-shirt-arrow" style={{opacity: 1}} onClick={leftShirtArrowClick}/>
            <img className="shirts" src={shirts[shirtIndex]}/>
            <img className="rightShirtArrow" src={rightArrowShirt} alt="right-shirt-arrow" style={{opacity: 1}} onClick={rightShirtArrowClick}/>
          </div>
          <div className="skirt-container">
            <img className="leftSkirtArrow" src={leftArrowSkirt} alt="left-skirt-arrow" style={{opacity: 1}} onClick={leftSkirtArrowClick}/>
            <img className="skirts" src={skirts[skirtIndex]}/>
            <img className="rightSkirtArrow" src={rightArrowSkirt} alt="right-skirt-arrow" style={{opacity: 1}} onClick={rightSkirtArrowClick}/>
          </div>
          <div className='shoe-container'>
            <img className="leftShoeArrow" src={leftArrowShoe} alt="left-shoe-arrow" style={{opacity: 1}} onClick={leftShoeArrowClick}/>
            <img className="shoes" src={shoes[shoeIndex]}/>
            <img className="rightShoeArrow" src={rightArrowShoe} alt="right-shoe-arrow" style={{opacity: 1}} onClick={rightShoeArrowClick}/>
          </div>
        </div>
      )}

      {clicked && enter && (
      <div className='final-outfit'>
        <img className="accessories" src={accessories[accessoryIndex]}/>
        <img className="shirts" src={shirts[shirtIndex]}/>
        <img className="skirts" src={skirts[skirtIndex]}/>
        <img className="shoes" src={shoes[shoeIndex]}/>
      </div>
      )}
    </div>
  );
}

export default App;
