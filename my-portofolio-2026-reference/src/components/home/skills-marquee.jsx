import CurvedLoop from "../CurvedLoop"
import { Marquee } from "../marquee"
import ScrollVelocity from "../ScrollVelocity"


export function SkillsMarquee() {
  return (
    <div className=" ">
      {/* <div className="h- relative -top-30 ">
        <CurvedLoop
          marqueeText="✦ Web Development ✦ Community ✦ Development ✦ Mentor ✦ Websites ✦ 3D Interactive ✦ UI/UX Design ✦ Branding ✦ Mobile Apps "
          speed={2}
          curveAmount={300}
          direction="right"
          interactive
          className="text-5xl"
        />

      </div> */}
      <ScrollVelocity
        texts={[
          '✦ Web Development ✦ Development ✦ Websites ✦ 3D Interactive ✦ UI/UX Design ✦ Branding ✦ Mobile Apps ✦ Performance ✦ Accessibility ✦ Creative Coding',
          '✦ Frontend Architecture ✦ Product Strategy ✦ Innovation ✦ Mobile Apps ✦ Branding ✦ UI/UX Design ✦ 3D Interactive ✦ Websites ✦ Development ✦ Web Development',
        ]}

        velocity={100}
        className=" font-title font-medium"
      />


    </div>
  )
}
