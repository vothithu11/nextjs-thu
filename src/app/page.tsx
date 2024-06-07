import SwipeToSlide from "@/sections/SwipeToSlide";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Environment from "@/sections/Environment";
import Investor from "@/sections/Investor";
import Navigation from "@/sections/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative mx-auto space-8">
      <Header/>
      <section className="xl:padding-1 wide: padding-b">
        <Hero/>
      </section>
        <Navigation/>
      <section className="padding w-full bg-pale-blue">
        <SwipeToSlide/>
      </section>
      <section className="padding ">
        <Environment/>
      </section>
      <section className="padding">
        <Investor/>
      </section>
      <section className="">
        <Footer/>
      </section>
    </div>  
  );
}
