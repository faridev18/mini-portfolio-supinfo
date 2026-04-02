import { useState } from "react"
import { SectionBadge } from "../section-badge"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils"
import { motion, AnimatePresence } from "motion/react"

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I provide end-to-end digital solutions including web and mobile development, UI/UX and product design, branding and visual identity, as well as 3D and interactive experiences. My work focuses on building high-performance, accessible, and scalable digital products tailored to each client’s goals.",
  },
  {
    question: "What is your typical project process?",
    answer: "My process starts with discovery and strategy to understand your business goals and users. I then move into design and prototyping, followed by development, testing, and optimization. Every project concludes with a smooth deployment and post-launch support to ensure long-term success.",
  },
  {
    question: "How do you ensure quality and performance?",
    answer: "I follow best practices in clean architecture, responsive design, accessibility standards, and performance optimization. This includes code reviews, testing, SEO and speed optimization, and cross-browser and device compatibility checks before every launch.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I collaborate with brands and teams worldwide, offering clear communication, flexible time-zone coordination, and reliable project management to ensure smooth and transparent collaboration from start to finish.",
  },
  {
    question: "How can I start a project with you?",
    answer: "You can get started by reaching out through the contact form with a brief overview of your project. I’ll follow up to schedule a discovery call and define the scope, timeline, and next steps.",
  },
]


export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionBadge>FAQS</SectionBadge>
            <h2 className="text-3xl md:text-5xl font-title font-medium  mt-4">
              Have<br />Questions?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left  transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-muted-foreground">0{index + 1}.</span>
                    <span className="font-medium">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
