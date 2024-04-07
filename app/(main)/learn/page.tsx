import { StickyWrapper } from "@/components/stickyWrapper"
import { FeedWrapper } from "@/components/feedWrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/userProgress"
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { UnitComponent } from "./unitComponent"

const Page = async () => {

  
  const userProgress = await getUserProgress()
  const courseProgress = await getCourseProgress()
  const lessonPercentage = await getLessonPercentage()
  const userSubscription = await getUserSubscription()
  const units = await getUnits()

  if(!userProgress || !userProgress.activeCourse || !courseProgress){
    redirect("/courses")
  }



  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress 
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title = {userProgress.activeCourse.title } />
      
        {units?.map((unit)=>(
          <div key={unit.id} className="mb-10">
            
              <UnitComponent
                id = {unit.id}
                order={unit.order}
                description = {unit.description}
                title={unit.title}
                lessons = {unit.lessons}
                activeLesson={courseProgress?.activeLesson}
                activeLessonPercentage={lessonPercentage}


              />
          </div>

        ))}
    
      </FeedWrapper>
    </div>
  )
}

export default Page