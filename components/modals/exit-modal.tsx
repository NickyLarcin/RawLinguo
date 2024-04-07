"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useExitModal } from "@/store/use-exit-modal";


export const ExitModal = () => {
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)
    const { isOpen, close }= useExitModal()

    useEffect(()=> setIsClient(true), [])

    if (!isClient) {
        return null
    }

    return (

        <Dialog open={isOpen} onOpenChange={close}>
           <DialogContent className="max-w-md flex flex-col justify-center items-center">
                <DialogHeader>
                    <div className="flex justify-center mb-5 w-full items-center">
                        <Image src="/mascot_sad.svg" alt="mascot" height={80} width={80} />
                    </div>
                    <DialogTitle className="text-center font-semibold text-2xl">
                        Arrrrr don&apos;t go!
                    </DialogTitle>
                    <DialogDescription className="text-center font-semibold text-md">
                        You&apos;re not leaving alredy. Are ya ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4 flex items-center justify-center">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button className="w-full" size="lg" variant="primary" onClick={close}>
                            Keep Learning
                        </Button>
                        <Button className="w-full" size="lg" variant="dangerOutline" onClick={()=>{
                            close();
                            router.push("/learn")
                        }}>
                            End Session
                        </Button>
                    </div>
                </DialogFooter>
           </DialogContent>
        </Dialog>
    )



}