import Layout from "@/components/Layout";
import Head from "next/head";
import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import BookingSection from "@/sections/BookingSection";
import Pricing from "@/sections/Pricing";
import ServicesSection from "@/sections/ServicesSection";
import FAQ from "@/sections/FAQ";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Advantage Black Car</title>
        <meta
          name="description"
          content="Advantage Black Car is a local, family-owned limo service in Martha's Vineyard. With a deep-rooted commitment to hospitality and excellence, we offer personalized experiences and insider tips to enhance your visit to the island."
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/car.png" />
        <Script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&libraries=places`}
          strategy="beforeInteractive"
        />
      </Head>
      <Layout>
        <div className="h-[100px] py-[50px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full aspect-square object-cover"
          >
            <source src={"/videos/vid2.mp4"} type="video/mp4" />
          </video>
        </div>
        <Hero />
        <AboutSection />
        <Pricing />
        <ServicesSection />
        <BookingSection />
        <FAQ />
      </Layout>
    </>
  );
}
