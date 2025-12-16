import { Link } from "react-router-dom";

function ProductLineCard({ title, logo, image, href }) {
    return (
         <Link
      to={href}
      className="group relative block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm transition hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
      aria-label={`Open ${title}`}
    >   
    {/* Image */}
      <div className="relative h-40 w-full bg-slate-800">
        {image ? (
          <img
            src={image}
            alt={`${title} product`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full" />
        )}

        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex items-center gap-3 p-4">
        {/* Logo */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/70 border border-slate-700">
          {logo ? (
            <img
              src={logo}
              alt={`${title} logo`}
              className="h-7 w-7 object-contain"
              loading="lazy"
            />
          ) : (
            <span className="text-xs text-slate-300">Logo</span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-lg font-semibold tracking-tight text-slate-100">
            {title}
          </h3>
          <p className="text-sm text-slate-300">
            View brochures, specs & media
          </p>
        </div>

        <span className="text-slate-400 transition group-hover:text-teal-300">
          →
        </span>
      </div>
    </Link>
  );
}
export default ProductLineCard;