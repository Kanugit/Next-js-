import Courses from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import Whychosseus from "@/components/Whychosseus";
import Testimonial from "@/components/Testimonial";
import UpcomingE from "@/components/UpcomingE";
import Image from "next/image";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen">
    <HeroSection/>
    <Courses/>
    <Whychosseus/>
    <Testimonial/>
    <UpcomingE/>
    <Instructors/>
    </main>
  );
}
