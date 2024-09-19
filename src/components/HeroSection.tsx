import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { BackgroundLines } from "./ui/background-lines";

function HeroSection(){

    return(
        <BackgroundLines className="h-auto md:h-[45rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="top-40 left-0 md:left-60 md:-top-20">
        
    
            <div className="p-4 relative z-10 w-full text-center" >
           <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold  bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
    Master the art of music
  </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you are beginner or looking to refine your skills, join us to unlock your true potential.</p> 
            <div className="pt-20"> <Link href={"/courses"}><Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore courses</Button>
            </Link></div>
           </div>
           </div>
           </BackgroundLines>
        
    )
}
export default HeroSection