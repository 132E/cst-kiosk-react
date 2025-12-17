import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex items-center justify-between gap-6">
      {/* Logo link */}
      <Link to="/" className="block shrink-0">
        <img
          src="/assets/logos/cst-logo-w.png"
          alt="CST"
          className="h-10 w-auto sm:h-14 object-contain"
        />
      </Link>

      {/* Headline */}
      <h2 className="text-right text-2xl sm:text-4xl font-semibold tracking-tight text-[#0A4D8C] bg-white px-10 py-1 rounded-s-3xl">
        From Ground Level to Global Scale
      </h2>
    </section>
  );
}

export default Hero;
