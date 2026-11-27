import { Button } from "@heroui/react";
import { Handset, ClockArrowRotateLeft } from "@gravity-ui/icons";
import "./hero.css";

export default function Hero() {
  return (
    <main className="w-full h-dvh font-sans flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-7xl flex flex-col justify-center">
        <span className="font-mono text-md sm:text-lg">
          Rückruf innerhalb von 30 Minuten
        </span>
        <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex flex-col mb-4">
          <span>
            Steuerberatung
            <br />
            Buchhaltung
            <br />
            Personalverrechnung
          </span>
        </div>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          Alles aus einer Hand
        </span>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>
            <ClockArrowRotateLeft />
            Rückruf anfordern
          </Button>
          <Button variant="secondary">
            <Handset />
            Jetzt anrufen
          </Button>
        </div>
      </div>
      <a
        className="absolute bottom-24 after:w-16 after:h-24 -after:top-2"
        href="#1"
        id="clickable-area"
      >
        <div
          id="scroll-indicator"
          className="w-5 h-5 border-l-2 border-b-2 -rotate-45 border-white block"
        ></div>
      </a>
    </main>
  );
}
