import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation"
import { Quizz } from "./quizz"

const Page = async () => {

    const lessonData = getLesson();
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
  
    const [
      lesson,
      userProgress,
      userSubscription,
    ] = await Promise.all([
      lessonData,
      userProgressData,
      userSubscriptionData,
    ]);
    
    if (!lesson || !userProgress) {redirect("/learn")}

    const initialPercentage = 100 * lesson.challenges.filter((challenge) => challenge.completed).length 
    / lesson.challenges.length 

    return (
        <Quizz
            initialLessonId = {lesson.id}
            initialLessonChallenges = {lesson.challenges}
            initialHearts = {userProgress.hearts}
            initialPercentage = {initialPercentage}
            userSubscription = {userSubscription}            

        />
    )
}

export default Page