import Link from "next/link";

export function PageHeader({
  title,
  backHref,
}: {
  title: string;
  backHref?: string;
}) {
  return (
    <div className="page-head">
      {backHref ? (
        <Link className="back icon" href={backHref} aria-label="Geri" title="Geri">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      ) : null}
      <h1 className="page-title">{title}</h1>
    </div>
  );
}
