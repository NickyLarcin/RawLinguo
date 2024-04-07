import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">

        <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
            <Button variant="ghost" className="w-full">
                <Image src="/gb-sct.svg" height={40} width={40} alt="flag" className="rounded-md mr-4"></Image>
                Scottish
            </Button>

            <Button variant="ghost" className="w-full">
                <Image src="/fr.svg" height={40} width={40} alt="flag" className="rounded-md mr-4"></Image>
                French
            </Button>
        </div>
        </footer>
    )
}