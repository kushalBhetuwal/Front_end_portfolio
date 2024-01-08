import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { useEffect, useRef, useState } from "react";
import sound from "./assets/sound/sound.mp3";
import soundon from "./assets/sound/soundon.png";
import soundoff from "./assets/sound/soundoff.png";
const App = () => {
  const audioRef = useRef(new Audio(sound));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error("Audio play failed", err);
        // Handle the failure to play audio here, if needed
      }
    };

    if (isPlaying) {
      playAudio();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div>
          <img
            src={!isPlaying ? soundoff : soundon}
            className="w-10 h-10 fixed bottom-4 right-4 z-50 cursor-pointer"
            onClick={() => setIsPlaying(!isPlaying)}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
