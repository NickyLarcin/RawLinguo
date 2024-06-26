import { FeedWrapper } from "@/components/feedWrapper"
import { Promo } from "@/components/promo"
import { Quests } from "@/components/quests"
import { StickyWrapper } from "@/components/stickyWrapper"
import { UserProgress } from "@/components/userProgress"
import { getUserProgress, getUserSubscription } from "@/db/queries"
import { userProgress } from "@/db/schema"
import { redirect } from "next/navigation"
import Image from "next/image"
import { Items } from "./items"


const Page = async () => {

    const userProgress = await getUserProgress()
    const userSubscription = await getUserSubscription()

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/courses");
      }

    const isPro = !!userSubscription?.isActive;

    return (
        <>
        <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && (
          <Promo />
        )}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/shop.svg"
            alt="Shop"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>

        </div>
        </>
    )
}

export default Page