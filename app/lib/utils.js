import moment from "moment";

// export const formatDate = (date) => {
//   if (!date) return { day: "N/A", rest: "Date not available" };

//   return {
//     day: moment(date).format("D"),
//     rest: moment(date).format("MMM’YY dddd"),
//     fullDate: moment(date).format("MMMM D, YYYY"),s
//   };
// };

export const formatDate = (date) => {
  if (!date) return { day: "N/A", rest: "Date not available" };

  const parsedDate = date.includes(".")
    ? moment(date, "DD.MM.YYYY")
    : moment(date);

  return {
    day: parsedDate.format("D"),
    rest: parsedDate.format("MMM’YY dddd"),
    fullDate: parsedDate.format("MMMM D, YYYY"),
  };
};

export const extractImageUrl = (content) => {
  const match = content.match(/<img.*?src=["'](.*?)["']/);
  return match ? match[1] : "";
};

export const extractParagraphs = (content) => {
  const para = content
    .replace(/<\/?p[^>]*>/g, "\n")
    .replace(/<[^>]+>/g, "")
    .trim();
  return para;
};
