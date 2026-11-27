import { Link } from "@heroui/react/link";
import { Surface } from "@heroui/react/surface";
import Image from "next/image";
import Aside from "./aside";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="flex flex-row items-center fixed top-0 left-0 right-0 justify-center font-sans z-100">
      <Surface className="w-full flex flex-row items-center justify-center rounded-none py-4 px-8">
        <div className="flex flex-row items-center w-full max-w-7xl">
          <Image
            src="https://placehold.co/64"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            loading="eager"
            className="me-4"
          />
          <span className="font-bold text-lg sm:text-2xl">Lorem Ipsum</span>
          <span className="flex-1" />
          <div className="hidden md:flex gap-4">
            <Link href="/">Start</Link>
            <Link href="/">Services</Link>
            <Link href="/">Unternehmen</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Kontakt</Link>
          </div>
          <Aside />
        </div>
      </Surface>
    </nav>
  );
}
