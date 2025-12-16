import ProductLineCard from "../components/ProductLineCard";
import { productLines } from "../data/productLines";

function Home() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl text-center md:text-4xl font-bold tracking-tight">
          CST Industrial Storage Solutions Home Page
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {productLines.map((line) => (
          <ProductLineCard
            key={line.id}
            title={line.title}
            logo={line.logo}
            image={line.image}
            href={line.href}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
