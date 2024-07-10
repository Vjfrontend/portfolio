export const metadata = {
  title: "portfolio",
  description: "Victor Ezeabikwa",
};

import Hero from "@/components/hero";


import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <>
      <Hero />

      <Testimonials />
    </>
  );
}
