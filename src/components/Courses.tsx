'use client'
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { GlowingStarsBackgroundCard } from "./ui/glowing-stars";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: Boolean,       
}
function Courses() {
   const featuredcourses=courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-cyan-400 text-2xl font-bold pt-6">
            Featured Courses
          </h2>
          <p className="text-5xl pt-16 font-extrabold tracking-tight">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10 text-center"> 
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center me-12 ms-12">
        {featuredcourses.map((course:Course)=>(
          <div key={course.id}className="flex justify-center">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm pb-5"><div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow"><p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p><p className="text-lg text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
            <p className="mt-9 text-center"><Link href={`/course/${course.slug}`}>Learn More</Link></p></div></BackgroundGradient>
            
          </div>
        ))}
       </div>
       </div>
      
      <div className="mt-20 text-center"> <Link href={"/courses"}><Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">view all courses</Button></Link>
      </div>
    </div>
  );
}

export default Courses;
