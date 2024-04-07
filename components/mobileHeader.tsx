import { MobileSidebar } from "./mobileSidebar"


export const MobileHeader = () => {
    return (
        <div className="lg:hidden px-6 h-[50px] bg-green-500 border-b fixed top-0 items-center w-full z-50 flex">
            <MobileSidebar />
        </div>
    )
}