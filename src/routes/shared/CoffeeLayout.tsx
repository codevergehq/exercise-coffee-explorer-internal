import { Outlet, useSearchParams } from "react-router";
import CoffeeList from "./components/CoffeeList";
import SearchAndFilter from "./components/SearchAndFilter";

function CoffeeLayout() {
    const [searchParams] = useSearchParams()
    const showList = searchParams.get("showSearchBar") === "true"

    return (
        <div className="flex flex-col md:flex-row h-screen bg-zinc-50">
            {showList && (
                <div className="flex flex-col gap-4 w-full md:max-w-xs p-4 bg-white overflow-auto">
                    <SearchAndFilter />
                    <CoffeeList />
                </div>
            )}
            <div className="w-full md:max-w-3xl p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default CoffeeLayout;