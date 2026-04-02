import ScrollVelocity from "../ScrollVelocity"

export function SkillsMarquee() {
  return (
    <div>
      <ScrollVelocity
        texts={[
          '✦ Développement Web ✦ Sites Internet ✦ 3D Interactif ✦ Design UI/UX ✦ Branding ✦ Apps Mobiles ✦ Performance ✦ Accessibilité ✦ Coding Créatif',
          '✦ Architecture Frontend ✦ Stratégie Produit ✦ Innovation ✦ Apps Mobiles ✦ Branding ✦ Design UI/UX ✦ 3D Interactif ✦ Sites Internet ✦ Développement Web',
        ]}
        velocity={100}
        className="font-title font-medium"
      />
    </div>
  )
}
