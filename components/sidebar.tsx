import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link";
import { SidebarItem } from "./sidebarItem";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
	className?: string;
}


export const Sidebar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(
			"flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
			className,
		)}>
			<Link href="/learn">
				<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 ">
					<Image
						src="/parrot.svg"
						height={40}
						width={40}
						alt="mascot"
					/>
					<h1 className="text-2xl font-extrabold text-green-600 tracking-wide">RawLinguo</h1>
				</div>
			</Link>
			<div className="flex flex-col gap-y-2 flex-1">
				<SidebarItem label={"learn"} href={"/learn"} iconSrc={"/learn.svg"}/>
				<SidebarItem label={"leaderboard"} href={"/leaderboard"} iconSrc={"/leaderboard.svg"}/>
				<SidebarItem label={"quests"} href={"/quests"} iconSrc={"/quests.svg"}/>
				<SidebarItem label={"shop"} href={"/shop"} iconSrc={"/shop.svg"}/>
			</div>
			<div>
				<ClerkLoading>
					<Loader className="h-6 w-6 animate-spin" />
				</ClerkLoading>
				<ClerkLoaded>
					<div className="mb-3"><UserButton afterSignOutUrl="/"/></div>
					
				</ClerkLoaded>

			</div>
		</div>
	)
}

