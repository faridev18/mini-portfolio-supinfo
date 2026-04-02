import { ArrowRight, MoveRight } from 'lucide-react'
import { Link } from 'react-router'
import profile from '../../assets/about/me.png'
import CircularText from '../CircularText'
import Lanyard from '../Lanyard'

export function AboutHero() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="relative mx-auto lg:mx-0 w-full max-w-xs sm:max-w-sm">
            <div className="relative w-full overflow-hidden">
              <img
                src={profile}
                alt="Farihane S. ZANNOU"
                className="w-full h-full object-cover"
              />
            </div>


            {/* <Lanyard fov={30} position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}

            <Link to="/contact" className="absolute -bottom-6 right-0 w-34 h-34 border border-border rounded-full flex items-center justify-center bg-background group cursor-pointer">
            

              <CircularText
                text="LET'S TALK  LET'S TALK  LET'S TALK  "
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />

               <MoveRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 transition-transform duration-300 group-hover:-rotate-45" />
              
            </Link>
          </div>

          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-medium  leading-tight mb-6">
              A <span className="text-accent">full-stack developer</span>
<br />& digital designer
            </h1>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I collaborate with brands worldwide to design impactful, mission-driven websites that deliver results and achieve business goals.
            </p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors overflow-hidden relative group"
            >
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-[150%]">
                My Resume
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 group-hover:translate-y-0">
                My Resume
              </span>
              <span className="opacity-0">My Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
