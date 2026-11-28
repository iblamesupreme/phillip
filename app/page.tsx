import { Separator } from "@heroui/react";
import Company from "./components/company/company";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Services from "./components/services/services";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Company />
      <Separator />
      <Services />
    </>
  );
}
