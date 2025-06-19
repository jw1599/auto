
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const carData = [
  {
    model: "Kia Picanto",
    prijs: "€ 19.795,00",
    fiscalePrijs: "€ 18.995,00",
    vermogen: "46/63",
    bagageruimte: "255 liter",
    trekgewicht: "-",
    laadvermogen: "459 kg",
    garantie: "7 jaar / 150.000 km",
    batterijgarantie: "-",
    uitvoering: "DynamicLine"
  },
  {
    model: "Kia Stonic",
    prijs: "€ 26.995,00",
    fiscalePrijs: "€ 26.145,00",
    vermogen: "74/100",
    bagageruimte: "352 liter",
    trekgewicht: "710 kg",
    laadvermogen: "555 kg",
    garantie: "7 jaar / 150.000 km",
    batterijgarantie: "-",
    uitvoering: "ComfortLine"
  },
  {
    model: "Kia EV3",
    prijs: "€ 36.995,00",
    fiscalePrijs: "€ 36.020,00",
    vermogen: "150 / 204",
    bagageruimte: "460 liter",
    trekgewicht: "500 kg",
    laadvermogen: "570 kg",
    garantie: "7 jaar / 150.000 km",
    batterijgarantie: "7 jaar / 150.000 km",
    uitvoering: "Air 58,3 kWh"
  }
];

export default function HedinAutoCompare() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (model) => {
    setSelected((prev) =>
      prev.includes(model) ? prev.filter((m) => m !== model) : [...prev, model]
    );
  };

  const selectedCars = carData.filter((car) => selected.includes(car.model));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vergelijk modellen</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {carData.map((car) => (
          <Card
            key={car.model}
            className={`cursor-pointer ${
              selected.includes(car.model) ? "border-blue-500 border-2" : ""
            }`}
            onClick={() => toggleSelect(car.model)}
          >
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold">{car.model}</h2>
              <p className="text-sm text-gray-600">{car.uitvoering}</p>
              <p className="mt-2 font-bold">{car.prijs}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCars.length > 0 && (
        <div className="overflow-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Eigenschap</th>
                {selectedCars.map((car) => (
                  <th className="p-2 border" key={car.model}>
                    {car.model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Consumentenprijs", "prijs"],
                ["Fiscale prijs", "fiscalePrijs"],
                ["Vermogen", "vermogen"],
                ["Bagageruimte", "bagageruimte"],
                ["Trekgewicht", "trekgewicht"],
                ["Laadvermogen", "laadvermogen"],
                ["Garantie", "garantie"],
                ["Batterijgarantie", "batterijgarantie"],
                ["Uitvoering", "uitvoering"]
              ].map(([label, key]) => (
                <tr key={key}>
                  <td className="p-2 border font-semibold bg-gray-50">{label}</td>
                  {selectedCars.map((car) => (
                    <td className="p-2 border" key={car.model + key}>
                      {car[key] || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
