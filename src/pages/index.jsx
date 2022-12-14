import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import products from "../products.json";

export default function Home() {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        {products && <ProductFeed products={products} />}
      </main>
    </div>
  );
}