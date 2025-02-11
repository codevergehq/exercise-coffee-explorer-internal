import { Card, CardContent } from "@/components/ui/card";
import coffees from '@/coffee.json'
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

interface Coffee {
    id: number;
    name: string;
    price: number;
    image_url: string;
}
function CoffeeList() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchTerm = searchParams.get("search") || "";
    const grindOption = searchParams.get("grindOption") || "all";
    const flavorProfile = searchParams.get("flavorProfile") || "all";
    const roastLevel = searchParams.get("roastLevel") || "all";

    const filteredCoffee = coffees.filter(
        (coffee) =>
          coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (grindOption === "all" || coffee.grind_option.includes(grindOption)) &&
          (flavorProfile === "all" || coffee.flavor_profile.includes(flavorProfile)) &&
          (roastLevel === "all" || coffee.roast_level === Number.parseInt(roastLevel))
      )

    const handleCoffeeClick = (coffee: Coffee) => {
        navigate(`/${coffee.id}?${searchParams.toString()}`);
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Results ({filteredCoffee.length})</h2>
            {filteredCoffee.map((coffee) => (
                <Card
                    key={coffee.id}
                    className="cursor-pointer hover:bg-zinc-50 transition-colors shadow-none"
                    onClick={() => handleCoffeeClick(coffee)}
                >
                    <CardContent className="p-4 flex items-center space-x-4">
                        <img
                            src={coffee.image_url}
                            alt={coffee.name}
                            width={60}
                            height={60}
                            className="rounded-md"
                        />
                        <div className="flex-grow">
                            <h3 className="font-semibold">{coffee.name}</h3>
                            <p className="text-sm text-zinc-600">${coffee.price.toFixed(2)}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CoffeeList;