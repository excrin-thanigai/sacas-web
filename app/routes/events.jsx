import { useLoaderData } from "@remix-run/react";
import { fetchEvents, fetchMedia } from "../services/index";
import Layout from "../layouts/layout";
import { formatDate } from "../lib/utils";
import he from "he";
import { Link } from "@remix-run/react";
import Icons from "../components/icons";
import BannerImage from "../components/assets/images/hero_image2.png";
import NewonInsta from "../components/blocks/homepage/newon-insta";
import Banner from "../components/ui/banner";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS_Events", content: "SACAS_Events" },
  ];
};

export const loader = async () => {
  const events = await fetchEvents();
  const eventsWithMedia = await Promise.all(
    events.map(async (event) => {
      if (!event.featured_media) return { ...event, imageUrl: null };
      const imageUrl = await fetchMedia(event.featured_media);
      return { ...event, imageUrl };
    })
  );

  return { events: eventsWithMedia };
};
// export const loader = async () => {
//   try {
//     const events = await fetchEvents();
//     const eventsWithMedia = await Promise.all(
//       events.map(async (event) => {
//         try {
//           if (!event.featured_media) return { ...event, imageUrl: null };
//           const imageUrl = await fetchMedia(event.featured_media);
//           return { ...event, imageUrl };
//         } catch (error) {
//           console.error("Error fetching media:", error);
//           return { ...event, imageUrl: null }; // Handle error gracefully
//         }
//       })
//     );

//     return { events: eventsWithMedia };
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return { events: [] }; // Return an empty array on failure
//   }
// };

export default function Events() {
  const { events } = useLoaderData() || {};

  return (
    <Layout>
      <Banner
        imageSrc={BannerImage}
        title="SA Events"
        description="Get all important updates, notices, and announcements in one place. Stay informed about events, academic schedules, deadlines, and other essential information to ensure you never miss out."
        buttonText="CONTACT"
      />
      <section className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((item) => {
            const eventDate = item.meta?.event_date || item.date;
            const { day, rest } = formatDate(eventDate);
            // const { day, rest } = formatDate(item.date);
            return (
              <div
                key={item.id}
                className="border border-opacity-50 scale-[0.98] border-off_black bg-neutral-50  "
              >
                <div className="h-[26.19rem]">
                  <img
                    // src={item.imageUrl}
                    src={item.cs_featured_media.url}
                    alt="Event-Image"
                    width="26rem"
                    height="26.19rem"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="relative p-6 pt-3 space-y-3 min-h-[13.3rem] bg-neutral-50 group overflow-hidden transition-all duration-[2000ms] ease-in-out">
                  <div className="absolute top-0 left-1/2 w-[150%] h-[200%] bg-deep_red rounded-[50%] translate-x-[-50%] translate-y-[-100%] scale-0 group-hover:translate-y-[50%] group-hover:scale-[2.5] transition-transform duration-[2000ms] ease-in-out"></div>

                  <div className="relative flex justify-between items-center z-10">
                    <div>
                      <span className="text-deep_red text-h3 font-medium group-hover:text-heritage_gold transition-colors duration-[2000ms]">
                        {day}
                      </span>
                      <br />
                      <span className="text-off_black text-body_m group-hover:text-white transition-colors duration-[2000ms]">
                        {rest}
                        {/* {item.meta.event_date} */}
                      </span>
                    </div>
                    <Link
                      to={`/events/${item.slug}`}
                      className="block text-deep_red group-hover:bg-white p-2 transition-colors duration-[2000ms]"
                    >
                      <Icons name="arrow_top_right" width={14} height={14} />
                    </Link>
                  </div>
                  <hr className="relative h-[0.063rem] bg-deep_red border-0 group-hover:bg-heritage_gold transition-all duration-[2000ms] z-10" />

                  <h2 className="relative text-off_black text-body_m h-full font-normal line-clamp-3 group-hover:text-white transition-colors duration-[2000ms] z-10">
                    {he.decode(item.title.rendered)}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
