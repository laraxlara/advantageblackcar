import fs from "fs";
import path from "path";
import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import BookingSection from "@/sections/BookingSection";
import ServiceAdCard from "@/components/services/ServiceAdCard";

import co2 from "../../../public/images/co2.jpg";
import chev from "../../../public/images/fleet/chevy.jpg";

interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  image1: string;
  image2: string;
  text1: string;
  text2: string;
}

async function getData(): Promise<{ services: Service[] }> {
  const filePath = path.join(
    process.cwd(),
    "src/components/services",
    "services.json"
  );
  const fileData = await fs.promises.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData) as { services: Service[] };

  return data;
}

export const getStaticProps: GetStaticProps<{
  serviceData: Service | null;
}> = async (context) => {
  const serviceID = context.params?.serviceSlug;
  const data = await getData();
  const foundservice = data.services.find(
    (service) => serviceID === service.slug
  );

  if (!foundservice) {
    return {
      props: { hasError: true, serviceData: null },
    };
  }

  return {
    props: {
      serviceData: foundservice,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();
  const pathsWithParams = data.services.map((service) => ({
    params: { serviceSlug: service.slug },
  }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

const ServicePage: React.FC<{ serviceData: Service }> = ({ serviceData }) => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto mt-48">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h1 className="text-4xl font-semibold text-gray-800 leading-tight">
                {serviceData?.name}
              </h1>
              <Link href="/">
                <h2 className="py-2 text-red-700 inline-flex items-center justify-center mb-2">
                  Advantage Black Car
                </h2>
              </Link>
            </div>

            <Image
              src={co2}
              alt=""
              className="w-full object-cover lg:rounded"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">{serviceData?.text1}</p>

              <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                So why settle for ordinary when you can indulge in the
                extraordinary?
              </div>

              <p className="pb-6">{serviceData?.text2}</p>

              <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                Book your dream limo now
              </h2>

              <p className="pb-6">
                Welcome to Martha's Vineyard, where the ocean breeze whispers
                tales of enchantment and every sunset paints the sky with hues
                of wonder. At Martha's Vineyard Limo, we're not just in the
                business of transportation; we're in the business of making
                dreams come true. Picture this: You're standing on the shores of
                our picturesque island, surrounded by the beauty of nature and
                the promise of unforgettable moments. You have a vision for your
                special day—a wedding, an anniversary, or perhaps a romantic
                getaway—and you want every detail to be perfect. That's where we
                come in.
              </p>

              <p className="pb-6">
                Imagine arriving at your destination in style, greeted by one of
                our elegant limousines, each meticulously maintained and adorned
                with the finest touches of luxury. From the moment you step
                inside, you're enveloped in an atmosphere of sophistication and
                grace, where every journey is a celebration of life's most
                precious moments. Whether you're exchanging vows on a sun-kissed
                beach, toasting to love amidst the vineyards, or simply
                exploring the island's hidden treasures, our dedicated team is
                here to ensure that your experience is nothing short of magical.
              </p>
            </div>

            <ServiceAdCard />
          </div>
        </main>

        <footer className="border-t px-4 lg:px-0"></footer>
      </div>
      <BookingSection />
    </Layout>
  );
};

export default ServicePage;
