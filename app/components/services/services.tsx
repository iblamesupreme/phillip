import { Button } from "@heroui/react/button";
import { Card } from "@heroui/react/card";
import { CircleDollar, Book, Persons } from "@gravity-ui/icons";

export default function Services() {
  return (
    <div className="min-h-screen flex justify-center p-8" id="1">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold mb-4">Unsere Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-fit">
          <Card>
            <Card.Header>
              <span className="font-bold flex flex-row items-center gap-2 text-lg mb-2">
                <CircleDollar className="size-6" />
                Steuerberatung
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
            </Card.Header>
            <Card.Footer className="min-h-10">
              <Button className="ms-auto absolute right-4 bottom-4">
                Mehr erfahren
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <span className="font-bold flex flex-row items-center gap-2 text-lg mb-2">
                <Book className="size-6" />
                Buchhaltung
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
            </Card.Header>
            <Card.Footer className="min-h-10">
              <Button className="ms-auto absolute right-4 bottom-4">
                Mehr erfahren
              </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header>
              <span className="font-bold flex flex-row items-center gap-2 text-lg mb-2">
                <Persons className="size-6" />
                Personalverrechnung
              </span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam
              </p>
            </Card.Header>
            <Card.Footer className="min-h-10">
              <Button className="ms-auto absolute right-4 bottom-4">
                Mehr erfahren
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  );
}
