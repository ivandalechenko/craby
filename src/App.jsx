import Hero from './Hero'
import Paper from './Paper'
import Media from './Media'
import HTB from './HTB'
import Tokenomics from './Tokenomics'
import Bubbles from './Bubbles'
import Fishes from './Fishes'
import Footer from './Footer'
import './scss/App.scss'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from 'react'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const audioRef = useRef(null);
  const [firstClick, setfirstClick] = useState(false);
  const [musicPlay, setmusicPlay] = useState(false);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Автоплей не сработал из-за ограничений браузера", error);
      });
    }
  }, []);

  useEffect(() => {
    if (firstClick) {
      setmusicPlay(true)
    }
  }, [firstClick])

  useEffect(() => {
    if (musicPlay) {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Автоплей не сработал из-за ограничений браузера", error);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }

  }, [musicPlay])

  return (
    <div className='App' onClick={() => { setfirstClick(true) }}>
      <audio ref={audioRef} src="/img/music.mp3" preload="auto" />
      <Hero play={firstClick} setplay={setmusicPlay} />
      <Fishes />
      <Bubbles />
      <Paper />
      <Media />
      <HTB />
      <Tokenomics />
      <Footer />
    </div>
  )
}

export default App
