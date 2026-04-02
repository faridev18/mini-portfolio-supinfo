import { Helmet } from "react-helmet-async"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { SectionBadge } from "../components/section-badge"
import { ContactForm } from "../components/contact/contact-form"
import { ContactInfo } from "../components/contact/contact-info"
import { FAQSection } from "../components/contact/faq-section"

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Let's Work Together</title>
        <meta name="description" content="Have a project? Contact me to discuss your needs and start our collaboration." />
      </Helmet>
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <SectionBadge>Contact Me</SectionBadge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-title font-medium  mt-4 mb-8">
                  Let{"'"}s start a project together
                </h1>
                <ContactForm />
              </div>
              <div className="lg:pt-16">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
