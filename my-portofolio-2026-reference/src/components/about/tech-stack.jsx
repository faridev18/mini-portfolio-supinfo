import Marquee from "react-fast-marquee"

const technologies = [
  {
    name: "React.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
    category: "frontend"
  },
  {
    name: "Next.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />,
    category: "frontend"
  },
  {
    name: "Laravel",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />,
    category: "backend"
  },
  {
    name: "Node.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />,
    category: "backend"
  },
  {
    name: "TypeScript",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
    category: "language"
  },
  {
    name: "Three.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" />,
    category: "3d"
  },
  {
    name: "Tailwind CSS",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />,
    category: "styling"
  },
  {
    name: "PostgreSQL",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />,
    category: "database"
  },
  {
    name: "Firebase",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />,
    category: "backend"
  },
  {
    name: "Figma",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />,
    category: "design"
  },
  {
    name: "JavaScript",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
    category: "language"
  },
  {
    name: "HTML5",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />,
    category: "frontend"
  },
  {
    name: "CSS3",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />,
    category: "styling"
  },
  {
    name: "PHP",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />,
    category: "backend"
  },
  {
    name: "Python",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
    category: "language"
  },
  {
    name: "Express.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />,
    category: "backend"
  },
  {
    name: "React Native",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
    category: "mobile"
  },
  {
    name: "Electron.js",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" />,
    category: "desktop"
  },
  {
    name: "Git/GitHub",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />,
    category: "tools"
  },
  {
    name: "API REST",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg" />,
    category: "backend"
  },
  {
    name: "WordPress",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg" />,
    category: "tools"
  },
  {
    name: "Photoshop",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" />,
    category: "design"
  },
  {
    name: "Illustrator",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" />,
    category: "design"
  },
  {
    name: "UI/UX Design",
    icon: <img className="w-5 h-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />,
    category: "design"
  }
];

export function TechStack() {
  return (
    <div className="py-6 border-y border-border bg-secondary/30">
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-2 text-sm text-muted-foreground border border-border rounded-full bg-background hover:bg-secondary hover:border-accent/30 transition-all duration-300 mx-2"
          >
            <div className="w-5 h-5">{tech.icon}</div>
            <div>{tech.name}</div>
            
          </div>
        ))}
      </Marquee>
    </div>
  )
}
