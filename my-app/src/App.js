import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Image from "./components/image";
import Img from "./components/image.json"
//image imports (since I'm not using a server)
import android18 from "./images/android18.png"
import beerus from "./images/beerus.png"
import cell from "./images/cell.jpg"
import frieza from "./images/frieza.png"
import gohan from "./images/gohan.jpg"
import Goku from "./images/Goku.png"
import krillin from "./images/krillin.png"
import majinBuu from "./images/majinBuu.png"
import piccolo from "./images/piccolo.png"
import trunks from "./images/trunks.png"
import vegeta from "./images/vegeta.png"
import zamasu from "./images/zamasu.png"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

 
  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct: Good choice!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "android18":
        return `${android18}`
      case "beerus":
        return `${beerus}`
      case "cell":
        return `${cell}`
      case "frieza":
        return `${frieza}`
      case "gohan":
        return `${gohan}`
      case "Goku":
        return `${Goku}`
      case "krillin":
        return `${krillin}`
      case "majinBuu":
        return `${majinBuu}`
      case "trunks":
        return `${trunks}`
      case "vegeta":
        return `${vegeta}`
      case "piccolo":
        return `${piccolo}`
      case "zamasu":
        return `${zamasu}`
      default:
        return `${Goku}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;