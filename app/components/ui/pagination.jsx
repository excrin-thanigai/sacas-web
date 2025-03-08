import { Link, useSearchParams } from "@remix-run/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "hugeicons-react";

export default function Pagination({ totalPages, currentPage }) {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (page >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Link
        to={`?page=${page - 1}`}
        className={`px-2 py-1 border rounded-md transition ${
          page > 1
            ? "text-deep_red hover:border-heritage_gold"
            : "text-neutral-300 border-neutral-300 cursor-not-allowed"
        }`}
        aria-disabled={page === 1}
      >
        <ArrowLeft01Icon size={24} />
      </Link>

      {pageNumbers.map((pageNum, index) =>
        pageNum === "..." ? (
          <span key={index} className="px-3 py-1 text-neutral-500">
            ...
          </span>
        ) : (
          <Link
            key={pageNum}
            to={`?page=${pageNum}`}
            className={`px-3 py-1 border rounded-md transition ${
              pageNum === page
                ? "bg-deep_red text-white border-deep_red"
                : "text-deep_red border-deep_red hover:bg-deep_red hover:text-white"
            }`}
          >
            {pageNum}
          </Link>
        )
      )}

      <Link
        to={`?page=${page + 1}`}
        className={`px-2 py-1 border rounded-md transition ${
          page < totalPages
            ? "text-deep_red hover:border-heritage_gold"
            : "text-neutral-300 border-neutral-300 cursor-not-allowed"
        }`}
        aria-disabled={page === totalPages}
      >
        <ArrowRight01Icon size={24} />
      </Link>
    </div>
  );
}
