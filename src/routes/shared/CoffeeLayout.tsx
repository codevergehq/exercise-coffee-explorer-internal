import { Outlet, useSearchParams } from "react-router";
import CoffeeList from "./components/CoffeeList";
import SearchAndFilter from "./components/SearchAndFilter";
import { useEffect, useState } from "react";

function CoffeeLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [searchParams] = useSearchParams()
    const showSearchBarParam = searchParams.get("showSearchBar")
    const showList = showSearchBarParam === null || showSearchBarParam === "true"

    useEffect(() => {
        setIsSidebarOpen(showList)
    }, [showList])

    return (
        <div className="relative flex flex-col md:flex-row h-screen bg-zinc-50">
            <div
                className={`
                    flex flex-col gap-4 
                    w-full md:max-w-xs p-4
                    bg-white overflow-auto
                    absolute md:relative z-10 h-full
                    transition-transform duration-300
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <SearchAndFilter />
                <CoffeeList />
            </div>
            <div className="w-full md:max-w-3xl p-4">
                <Outlet />
            </div>
        </div>
    )
}

export default CoffeeLayout;