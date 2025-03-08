import { useLoaderData } from "@remix-run/react";
import { fetchEvents, fetchMedia } from "../services/index";
import Layout from "../layouts/layout";
import { formatDate } from "../lib/utils";
import he from "he";
import { Link } from "@remix-run/react";
import Icons from "../components/icons";
import NewonInsta from "../components/blocks/homepage/newon-insta";
import Events from "../components/blocks/homepage/events";
import Placementsupport from "../components/blocks/placement/placement-support";
import OurFaculty from "../components/blocks/placement/our-faculty";
import PlacementCell from "../components/blocks/placement/placement-cell";
import Banner from "../components/ui/banner";
import BannerImage from "../components/assets/images/hero_image5.png";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_Placements", content: "SACAS_Placements" },
  ];
};

export const loader = async () => {
  try {
    const events = await fetchEvents();

    const eventsWithMedia = await Promise.all(
      events.map(async (event) => {
        try {
          if (!event.featured_media) return { ...event, imageUrl: null };
          const imageUrl = await fetchMedia(event.featured_media);
          return { ...event, imageUrl };
        } catch (error) {
          console.error("Failed to fetch media for event:", event.id, error);
          return { ...event, imageUrl: null };
        }
      })
    );

    return { events: eventsWithMedia };
  } catch (error) {
    console.error("Failed to load events:", error);
    throw new Response("Failed to load data", { status: 500 });
  }
};

export default function Placements() {
  const { events } = useLoaderData();
  return (
    <Layout>
      {/* <Banner /> */}
      <Banner
        imageSrc={BannerImage}
        title="Placements"
        description="Get all important updates, notices, and announcements in one place. Stay informed about events, academic schedules, deadlines, and other essential information to ensure you never miss out."
        buttonText="CONTACT"
      />
      <ul className="uppercase text-body_m font-medium tracking-normal text-white px-16 flex py-10 bg-deep_red items-center gap-16 justify-center  max-62rem:gap-6 max-md:flex-wrap max-sm:gap-12 max-md:py-4">
        <li className=" after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#PlacementCell">PlacementCell</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#OurFaculty">OurFaculty</a>
        </li>
        <li className="after:border-heritage_gold  after:h-6 after:border-r-2 after:ml-10 max-62rem:after:ml-6 max-sm:after:hidden">
          <a href="#Placementsupport">Placementsupport</a>
        </li>

        <li className="">
          <a href="#Events">Events</a>
        </li>
      </ul>

      <section id="PlacementCell">
        <PlacementCell />
      </section>

      <section id="OurFaculty">
        <OurFaculty />
      </section>

      <section id="Placementsupport">
        <Placementsupport />
      </section>

      <section
        id="Events"
        className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16"
      >
        <Events events={events} />
      </section>
    </Layout>
  );
}
