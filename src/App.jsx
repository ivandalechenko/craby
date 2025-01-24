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

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {


  return (
    <div className='App'>
      <Hero />
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
