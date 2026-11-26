"use client";
import Bars from "@gravity-ui/icons/Bars";
import Xmark from "@gravity-ui/icons/Xmark";
import { Button } from "@heroui/react/button";
import { Card } from "@heroui/react/card";
import { Link } from "@heroui/react/link";
import { useState } from "react";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        isIconOnly
        aria-label="Navigation öffnen"
        className="bg-transparent lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars width={24} height={24} />
      </Button>
      <Card
        className={
          "absolute flex lg:hidden h-screen w-screen h-screen -top-4 p-4 flex-col items-end rounded-none ease-in-out duration-300" +
          (isOpen ? " left-0" : "  ")
        }
      >
        <Button
          isIconOnly
          aria-label="Navigation schließen"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Xmark width={24} height={24} />
        </Button>
        <Card.Header>
          <Card.Description className="flex flex-col items-end gap-4 p-4 text-right text-xl">
            <Link href="/">Start</Link>
            <Link href="/">Services</Link>
            <Link href="/">Unternehmen</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Kontakt</Link>
          </Card.Description>
        </Card.Header>
      </Card>
    </div>
  );
}
