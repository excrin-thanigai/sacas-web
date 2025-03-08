import { useLoaderData } from "@remix-run/react";
import { fetchEvents, fetchAnnouncements, fetchMedia } from "../services/index";
import Layout from "../layouts/layout";
import NewonInsta from "../components/blocks/homepage/newon-insta";
import Recruiters from "../components/blocks/homepage/recruiters";
import Courses from "../components/blocks/homepage/courses";
import Gallery from "../components/blocks/homepage/gallery";
import AnnouncementsAndEvents from "../components/blocks/homepage/announcements-events";
import BannerHero from "../components/blocks/homepage/banner";
import Overview from "../components/blocks/homepage/overview";

export const meta = () => {
  return [{ title: "SACAS" }, { name: "description", content: "Welcome!" }];
};

// export const loader = async () => {
//   const announcements = await fetchAnnouncements(1, 15);

//   const events = await fetchEvents();
//   const eventsWithMedia = await Promise.all(
//     events.map(async (event) => {
//       const imageUrl = await fetchMedia(event.featured_media);
//       return { ...event, imageUrl };
//     })
//   );

//   return { events: eventsWithMedia, announcements };
// };

export const loader = async () => {
  try {
    const announcements = await fetchAnnouncements(1, 15);

    const events = await fetchEvents();
    const eventsWithMedia = await Promise.all(
      events.map(async (event) => {
        try {
          const imageUrl = await fetchMedia(event.featured_media);
          return { ...event, imageUrl };
        } catch (error) {
          console.error("Failed to fetch media for event:", event.id, error);
          return { ...event, imageUrl: null };
        }
      })
    );

    return Response.json({ events: eventsWithMedia, announcements });
  } catch (error) {
    console.error("Error in loader:", error);
    return new Response("Failed to load data", { status: 500 });
  }
};

export default function Index() {
  const { events = [], announcements = [] } = useLoaderData() || {};

  return (
    <Layout>
      <div>
        <BannerHero />
        <Overview />
        <Courses />
        <AnnouncementsAndEvents
          events={events}
          announcements={announcements.data || []}
        />

        <Gallery />
        <Recruiters />
      </div>
    </Layout>
  );
}
