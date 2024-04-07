"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
    label: string;
    iconSrc: string;
    href: string;
}

export const SidebarItem: React.FC<Props> = ({ label, iconSrc, href }) => {

    const pathname = usePathname()
    const active = pathname === href;

    return (
        <div>
            <Button variant={active ? "sidebarOutline" : "sidebar"}
                className="justify-start h-[52px] w-full gap-x-2"
                asChild>
                <Link href={href}>
                    <Image src={iconSrc} alt={""} width={25} height={40}/>
                    {label}
                </Link>

            </Button>
        </div>
    )
}
