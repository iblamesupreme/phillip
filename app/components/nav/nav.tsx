import { Link } from "@heroui/react/link";
import { Surface } from "@heroui/react/surface";
import Image from "next/image";
import { Bars } from "@gravity-ui/icons";
import { Card } from "@heroui/react/card";
import Aside from "./aside";

export default function Nav() {
  return (
    <Surface className="font-sans ps-4 pe-4 py-4 flex flex-row items-center relative">
      <Image
        src="https://placehold.co/64"
        alt="Logo"
        width={64}
        height={64}
        unoptimized
        loading="eager"
        className="me-4"
      />
      <span className="hidden sm:inline font-bold text-lg">
        Steuerberatungskanzlei
      </span>
      <span className="flex-1" />
      <div className="hidden lg:flex gap-4">
        <Link href="/">Start</Link>
        <Link href="/">Services</Link>
        <Link href="/">Unternehmen</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Kontakt</Link>
      </div>
      <Aside />
    </Surface>
  );
}
