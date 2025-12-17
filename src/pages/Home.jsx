import ProductLineCard from "../components/ProductLineCard";
import { productLines } from "../data/productLines";
import Hero from "../components/home/Hero";
import ProductLinesGrid from "../components/home/ProductionLinesGrid";

function Home() {
  return (
    <section>
      <Hero />
      <ProductLinesGrid />
    </section>
  );
}

export default Home;
