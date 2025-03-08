import { fetchAnnouncements, fetchMedia } from "../services/index";
import Layout from "../layouts/layout";
import { formatDate } from "../lib/utils";
import { Link } from "@remix-run/react";
import Icons from "../components/icons";
import Pagination from "../components/ui/pagination";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useLocation } from "@remix-run/react";
import he from "he";
import { ArrowDown01Icon } from "hugeicons-react";

export const meta = () => {
  return [
    { title: "SACAS" },
    { name: "SACAS Announcements", content: "SACAS Announcements" },
  ];
};

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);
//   const page = Number(url.searchParams.get("page")) || 1;
//   const perPage = 10;
//   const sortOrder = url.searchParams.get("sortOrder") || "desc";

//   const { data, totalRecords, totalPages, latest } = await fetchAnnouncements(
//     page,
//     perPage,
//     sortOrder
//   );
//   const announcementsWithMedia = await Promise.all(
//     announcements.map(async (announcement) => {
//       const imageUrl = await fetchMedia(announcement.featured_media);
//       return { ...announcement, imageUrl };
//     })
//   );
//   return {
//     announcements: data,
//     totalRecords,
//     totalPages,
//     page,
//     sortOrder,
//     latest,
//   };
// };

// export const loader = async ({ request }) => {
//   const url = new URL(request.url);
//   const page = Number(url.searchParams.get("page")) || 1;
//   const perPage = 10;
//   const sortOrder = url.searchParams.get("sortOrder") || "desc";

//   const { data, totalRecords, totalPages, latest } = await fetchAnnouncements(
//     page,
//     perPage,
//     sortOrder
//   );
//   const latestWithImage = latest
//     ? {
//         ...latest,
//         imageUrl: await fetchMedia(latest.featured_media),
//       }
//     : null;

//   return {
//     announcements: data,
//     totalRecords,
//     totalPages,
//     page,
//     sortOrder,
//     latest: latestWithImage,
//   };
// };

export const loader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const perPage = 10;
    const sortOrder = url.searchParams.get("sortOrder") || "desc";

    const { data, totalRecords, totalPages, latest } = await fetchAnnouncements(
      page,
      perPage,
      sortOrder
    );

    let latestWithImage = null;
    if (latest) {
      try {
        latestWithImage = {
          ...latest,
          imageUrl: await fetchMedia(latest.featured_media),
        };
      } catch (imageError) {
        console.error("Error fetching image:", imageError);
        latestWithImage = { ...latest, imageUrl: null };
      }
    }

    return {
      announcements: data,
      totalRecords,
      totalPages,
      page,
      sortOrder,
      latest: latestWithImage,
    };
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw new Response("Failed to load announcements", { status: 500 });
  }
};

export default function Index() {
  const { announcements, totalRecords, totalPages, page, sortOrder, latest } =
    useLoaderData();
  const [currentSortOrder, setCurrentSortOrder] = useState(sortOrder);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    setCurrentSortOrder(sortOrder);
  }, [sortOrder]);

  const toggleSortOrder = () => {
    const newSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
    searchParams.set("sortOrder", newSortOrder);
    navigate(`?${searchParams.toString()}`, { replace: true });
  };

  return (
    <Layout>
      <section className="bg-neutral-50 py-16 px-4 lg:py-20 lg:px-16 max-w-[110rem] w-full m-auto">
        <div className="space-y-8">
          <h2 className="uppercase text-h2 max-62rem:text-h3 font-medium flex gap-3">
            <span className="pt-3">
              <Icons name="heading-vector" width={19} height={20} />
            </span>
            Latest Announcement
          </h2>

          {latest ? (
            <div className="bg-deep_red flex max-62rem:flex-col">
              <div className="max-62rem:max-w-full w-full max-w-[23rem]">
                <img
                  src={latest.imageUrl}
                  width="23rem"
                  height="23rem"
                  className=" w-full h-full aspect-[23/23]"
                />
              </div>
              <div className="p-6 flex flex-col justify-between gap-4 w-full">
                <div className="space-y-4">
                  <div>
                    <span className="text-h3 font-medium text-heritage_gold ">
                      {formatDate(latest.date).day}
                    </span>
                    <br />
                    <span className="text-body_m text-white ">
                      {formatDate(latest.date).rest}
                    </span>
                  </div>
                  <hr className=" h-[0.063rem] w-full border-0 bg-heritage_gold" />
                  <p className="text-white text-body_m">
                    {he.decode(latest.title.rendered)}
                  </p>
                </div>
                <Link to={`/announcements/${latest.slug}`}>
                  <button className=" uppercase bg-white w-fit text-deep_red py-2 px-6  text-body_m font-semibold">
                    VIEW ANNOUNCEMENT
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-neutral-200">
              No recent announcements available.
            </p>
          )}
        </div>
      </section>
      <section className="max-w-[110rem] w-full m-auto bg-white py-16 px-4 lg:py-20 lg:px-16">
        <div className="space-y-8">
          <div className="flex justify-between items-start px-3 max-62rem:flex-col gap-3 ">
            <div className="flex gap-2 items-center cursor-pointer ">
              <h6 className="text-deep_red font-semibold text-body_m">
                Filter
              </h6>
              {/* <select className="w-[30rem] max-62rem:w-full max-62rem:py-1 border border-off_black px-3 py-2  focus:outline-none ">
                <option value="">Choose Department</option>
              </select> */}
              <div className="relative w-[30rem] max-62rem:w-full">
                <select className="w-full border border-off_black px-3 py-2 pr-10 max-62rem:py-1 focus:outline-none appearance-none">
                  <option value="">Choose Department</option>
                </select>
                <ArrowDown01Icon
                  size={24}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-deep_red pointer-events-none"
                />
              </div>
            </div>
            <div
              className="flex gap-2 cursor-pointer "
              onClick={toggleSortOrder}
            >
              <h6 className="text-deep_red font-semibold text-body_m">
                Sort by
              </h6>
              <span className="text-body_m font-medium">
                {currentSortOrder === "asc" ? "Old to New" : "New to Old"}
              </span>
              <Icons name="sort" width={20} height={20} />
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex flex-col gap-8">
              {announcements.map((item) => {
                const { day, rest } = formatDate(item.date);
                // const { day, rest } = formatDate(item.meta.event_date);

                const title = he.decode(item.title?.rendered || "Untitled");

                return (
                  <div className="relative p-3 border border-opacity-50 scale-[0.98] border-off_black space-y-4 min-h-[12.5rem] bg-white group overflow-hidden transition-all duration-[2000ms] ease-in-out">
                    <div className="absolute top-0 left-1/2 w-[150%] h-[200%] bg-deep_red rounded-[50%] translate-x-[-50%] translate-y-[-100%] scale-0 group-hover:translate-y-[50%] group-hover:scale-[2.5] transition-transform duration-[2000ms] ease-in-out"></div>

                    <div className="relative flex justify-between items-center z-10">
                      <div>
                        <span className="text-deep_red text-h3 font-medium group-hover:text-heritage_gold transition-colors duration-[2000ms]">
                          {day}
                        </span>
                        <br />
                        <span className="text-off_black text-body_m group-hover:text-white transition-colors duration-[2000ms]">
                          {rest}
                        </span>
                      </div>
                      <Link
                        to={`/announcements/${item.slug}`}
                        className="block text-deep_red group-hover:bg-white p-2 transition-colors duration-[2000ms]"
                      >
                        <Icons name="arrow_top_right" width={14} height={14} />
                      </Link>
                    </div>

                    <hr className="relative h-[0.063rem] bg-deep_red border-0 group-hover:bg-heritage_gold transition-all duration-[2000ms] z-10" />

                    <h2 className="relative text-off_black text-body_m font-normal line-clamp-3 group-hover:text-white transition-colors duration-[2000ms] z-10">
                      {title}
                    </h2>
                  </div>
                );
              })}
            </div>

            <Pagination totalPages={totalPages} currentPage={page} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
