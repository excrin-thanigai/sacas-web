import { useLoaderData } from "@remix-run/react";
import { fetchEventBySlug } from "../services/index";
import he from "he";
import { formatDate, extractParagraphs, extractImageUrl } from "../lib/utils";
import Layout from "../layouts/layout";

export const loader = async ({ params }) => {
  const { slug } = params;

  const event = await fetchEventBySlug(slug);

  return { event };
};

export default function EventSlug() {
  const { event } = useLoaderData();

  if (!event) return <p>No event found.</p>;

  const formattedDate = event.date ? formatDate(event.date) : null;
  const title = event.title?.rendered
    ? he.decode(event.title.rendered)
    : "Untitled";
  const content = event.content?.rendered || "";

  return (
    <Layout>
      <section className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16">
        <div className="mb-8 ">
          <h2 className="text-h2 font-medium ">{title}</h2>
          {formattedDate && <p className="mt-4">{formattedDate.fullDate}</p>}
        </div>
        <div
          className="detail-content-custom "
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </section>
    </Layout>
  );
}
