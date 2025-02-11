import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

function SearchAndFilter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const grindOption = searchParams.get("grindOption") || "all";
    const flavorProfile = searchParams.get("flavorProfile") || "all";
    const roastLevel = searchParams.get("roastLevel") || "all";
    

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParams((prev) => {
            prev.set("search", e.target.value);
            return prev;
        });
    };

    const handleFilterChange = (filter: string, value: string) => {
        setSearchParams((prev) => {
            prev.set(filter, value);
            return prev;
        });
    };

    return (
        <div className="mb-4 space-y-4">
            <Input type="text" placeholder="Search coffee..." value={search} onChange={(e) => handleSearchChange(e)} />
            <div>
                <Label htmlFor="grind-option">Grind Option</Label>
                <Select value={grindOption} onValueChange={(value) => handleFilterChange("grindOption", value)}>
                    <SelectTrigger id="grind-option">
                        <SelectValue placeholder="Select grind option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Whole Bean">Whole Bean</SelectItem>
                        <SelectItem value="Cafetiere">Cafetiere</SelectItem>
                        <SelectItem value="Filter">Filter</SelectItem>
                        <SelectItem value="Espresso">Espresso</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="flavor-profile">Flavor Profile</Label>
                <Select value={flavorProfile} onValueChange={(value) => handleFilterChange("flavorProfile", value)}>
                    <SelectTrigger id="flavor-profile">
                        <SelectValue placeholder="Select flavor profile" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="Chocolate">Chocolate</SelectItem>
                        <SelectItem value="Nutty">Nutty</SelectItem>
                        <SelectItem value="Citrus">Citrus</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="roast-level">Roast Level</Label>
                <Select value={roastLevel} onValueChange={(value) => handleFilterChange("roastLevel", value)}>
                    <SelectTrigger id="roast-level">
                        <SelectValue placeholder="Select roast level" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="1">Light</SelectItem>
                        <SelectItem value="2">Medium</SelectItem>
                        <SelectItem value="3">Dark</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SearchAndFilter;