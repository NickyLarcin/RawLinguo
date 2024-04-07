import { Progress } from "@/components/ui/progress";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";
import { useExitModal } from "@/store/use-exit-modal";
import { useHeartsModal } from "@/store/use-hearts-modal";

type Props = {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
}

export const Header: React.FC<Props> = ({ hearts, percentage, hasActiveSubscription }) => {

    const { open: openExitModal } = useExitModal()

    const { open: openHeartsModal } = useHeartsModal();

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            
            <X
                onClick={openExitModal}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            />
            <Progress value={percentage}/>
                <div className="text-rose-500 flex items-center font-bold"  onClick={openHeartsModal}>

                    <Image src="heart.svg" height={28} width={28} alt="blabla" className="mr-2 cursor-pointer"/>
                    {hasActiveSubscription ? <InfinityIcon className="h-6 w-6 stroke-[3]"/> : hearts}

                </div>

            

        </header>
    )
}