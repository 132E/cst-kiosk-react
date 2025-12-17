import ProductLineCard from "../ProductLineCard";
import { productLines } from "../../data/productLines";

function ProductLinesGrid() {
  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {productLines.map((line) => (
          <ProductLineCard
            key={line.id}
            title={line.title}
            logo={line.logo}
            image={line.image}
            href={line.href || `/product-lines/${line.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductLinesGrid;
