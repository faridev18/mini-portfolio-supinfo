import ScrollVelocity from "../ScrollVelocity"

export function SkillsMarquee() {
  return (
    <div>
      <ScrollVelocity
        texts={[
          '✦ Développement Mobile ✦ Flutter ✦ Dart ✦ iOS & Android ✦ UI/UX Mobile ✦ Firebase ✦ Performance ✦ Accessibilité ✦ Cross-Platform',
          '✦ Architecture Mobile ✦ App Store ✦ Google Play ✦ Expo ✦ TypeScript ✦ API REST ✦ Clean Architecture ✦ CI/CD ✦ Développement Mobile',
        ]}
        velocity={100}
        className="font-title font-medium"
      />
    </div>
  )
}
