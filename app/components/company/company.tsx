import { Separator, Surface } from "@heroui/react";
import { Avatar } from "@heroui/react/avatar";
import { Counter } from "./counter";

export default function Company() {
  return (
    <div className="flex justify-center px-8 py-16" id="company">
      <div className="max-w-7xl w-full">
        <h1 className="font-bold text-4xl mb-4">Unser Unternehmen</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <Surface className="flex flex-col gap-4 p-6 rounded-4xl text-nowrap justify-center">
            <div className="flex flex-row gap-2">
              <Avatar size="md">
                <Avatar.Image alt="Phillip Mustermann" src="#" />
                <Avatar.Fallback>P</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold">Phillip Mustermann</span>
                <span className="italic text-gray-400">
                  Chief Executive Officer
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Avatar size="md">
                <Avatar.Image alt="Max Mustermann" src="#" />
                <Avatar.Fallback>M</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold">Max Mustermann</span>
                <span className="italic text-gray-400">
                  Chief Operating Officer
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Avatar size="md">
                <Avatar.Image alt="Erika Mustermann" src="#" />
                <Avatar.Fallback>E</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-bold">Erika Mustermann</span>
                <span className="italic text-gray-400">
                  Chief Financial Officer
                </span>
              </div>
            </div>
          </Surface>
          <div>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p className="pb-8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col text-center">
                <Counter end={420} />
                <span className="text-sm">Zufriedene Kunden</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col text-center">
                <Counter end={14} suffix="+" />
                <span className="text-sm">Jahre Erfahrung</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col text-center">
                <Counter end={30} suffix=" Min." />
                <span className="text-sm">Antwortzeit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
