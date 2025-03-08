import { useLoaderData } from "@remix-run/react";
import { fetchAnnouncementBySlug } from "../services/index";
import { formatDate } from "../lib/utils";
import Layout from "../layouts/layout";
import he from "he";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS Announcement", content: "SACAS Announcement" },
  ];
};

export const loader = async ({ params }) => {
  const { slug } = params;
  const announcement = await fetchAnnouncementBySlug(slug);
  return { announcement };
};

export default function AnnouncementSlug() {
  const { announcement } = useLoaderData();

  if (!announcement) return <p>No announcement found.</p>;

  const formattedDate = announcement.date
    ? formatDate(announcement.date)
    : null;
  const title = he.decode(announcement.title?.rendered) || "Untitled";
  const content = announcement.content?.rendered || "";

  return (
    <Layout>
      <section className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16">
        <div className="mb-8 ">
          <h2 className="text-h2 font-medium ">{title}</h2>
          {formattedDate && <p className="mt-4">{formattedDate.fullDate}</p>}
        </div>
        <div
          className="detail-content-custom"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </section>
    </Layout>
  );
}
