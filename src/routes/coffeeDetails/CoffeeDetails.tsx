import coffees from "@/coffee.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router";

function CoffeeDetails() {
    const { id } = useParams();
    const coffee = coffees.find((coffee) => coffee.id === Number(id));

    if (!coffee) {
        return <div>Coffee not found</div>;
    }

    return (
        <div className="container mx-auto p-2">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl">{coffee.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <img
                        src={coffee.image_url || "/placeholder.svg"}
                        alt={coffee.name}
                        className="w-full max-w-2xl mx-auto rounded-md"
                    />

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <strong className="block text-sm font-medium text-zinc-400 mb-1">Price</strong>
                                ${coffee.price.toFixed(2)}
                            </div>
                            <div>
                                <strong className="block text-sm font-medium text-zinc-400 mb-1">Region</strong>
                                {coffee.region}
                            </div>
                            <div>
                                <strong className="block text-sm font-medium text-zinc-400 mb-1">Weight</strong>
                                {coffee.weight}g
                            </div>
                            <div>
                                <strong className="block text-sm font-medium text-zinc-400 mb-1">Roast Level</strong>
                                {coffee.roast_level}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <p className="text-sm">{coffee.description}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold mb-4">Flavor Profile</h2>
                            <div className="flex flex-wrap gap-1">
                                {coffee.flavor_profile.map((flavor) => (
                                    <Badge key={flavor} variant="secondary">
                                        {flavor}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold mb-4">Grind Options</h2>
                            <div className="flex flex-wrap gap-1">
                                {coffee.grind_option.map((option) => (
                                    <Badge key={option} variant="outline">
                                        {option}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CoffeeDetails;