import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSearchParams } from "react-router";

function Layout({ children }: { children: React.ReactNode }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const showSearchBar = searchParams.get("showSearchBar") === "true"

    const onToggleSearchBar = (show: boolean) => {
        setSearchParams({ 
            ...Object.fromEntries(searchParams.entries()),
            showSearchBar: show ? "true" : "false"
         })
    }

    return (
        <>
            <header className="flex bg-white shadow-md px-4 py-2">
                <Button variant="ghost" size="icon" onClick={() => onToggleSearchBar(!showSearchBar)}>
                    <span className="sr-only">Toggle Search Bar</span>
                    {showSearchBar ? <X className="size-4" /> : <Menu className="size-4" />}
                </Button>
            </header>
            <main className="md:flex-row h-screen bg-zinc-50 relative">
                {children}
            </main>
        </>
    )
}

export default Layout;