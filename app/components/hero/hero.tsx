import { Button } from "@heroui/react";
import "./hero.css";

export default function Hero() {
  return (
    <main className="w-full h-dvh font-sans flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-7xl flex flex-col justify-center">
        <div className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {/* TODO: Add eyebrow heading */}
          <h1>Steuerberatung</h1>
          <h1>Buchhaltung</h1>
          <h1>Personalverrechnung</h1>
        </div>
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
          Alles aus einer Hand
        </span>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button>Rückruf anfordern</Button>
          <Button variant="secondary">Jetzt anrufen</Button>
        </div>
      </div>
    </main>
  );
}
