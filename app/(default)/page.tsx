export const metadata = {
  title: "portfolio",
  description: "Victor Ezeabikwa",
};

import About from "@/components/About";
import Hero from "@/components/hero";
import MYWorks from "@/components/myWorks";
import ContactForm from "@/components/contact";


import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <MYWorks />
      <Testimonials />
      < ContactForm/>
    </>
  );
}
