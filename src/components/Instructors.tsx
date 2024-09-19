'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import Image from "next/image";
const instructors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        '/ins1 (1).jpg',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        '/ins1 (2).jpg',},
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        '/ins1 (3).jpg'
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
       '/ins1 (1).jpg',
    }

  ];

function Instructors() {
  return (
    <div className="relative h-[45rem] overflow-hidden flex item-center justify-center">
      <WavyBackground className="flex flex-col justify-center item-center w-full h-full max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
        <p className="text-2xl font-normal text-center mb-10">Discover the talented professional who will guide your musical journey</p>
        <div className="flex flex-row mb-10 w-full items-center justify-center">
        <AnimatedTooltip items={instructors}/>
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors
