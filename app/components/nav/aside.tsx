"use client";
import Bars from "@gravity-ui/icons/Bars";
import Xmark from "@gravity-ui/icons/Xmark";
import { Button } from "@heroui/react/button";
import { Card } from "@heroui/react/card";
import { Link } from "@heroui/react/link";
import { useState, useEffect } from "react";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div>
      <Button
        isIconOnly
        aria-label="Navigation öffnen"
        className="bg-transparent md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars width={24} height={24} />
      </Button>
      <Card
        className={
          "fixed flex md:hidden h-screen w-screen h-screen -top-4 p-8 pt-7 flex-col items-end rounded-none ease-in-out duration-300 top-0" +
          (isOpen ? " left-0" : " left-full")
        }
      >
        <Button
          isIconOnly
          aria-label="Navigation schließen"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent"
        >
          <Xmark width={24} height={24} />
        </Button>
        <Card.Header>
          <Card.Description className="flex flex-col items-end gap-8 me-3 text-right text-2xl">
            <Link href="/">Start</Link>
            <Link href="/">Unternehmen</Link>
            <Link href="/">Services</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Kontakt</Link>
          </Card.Description>
        </Card.Header>
      </Card>
    </div>
  );
}
