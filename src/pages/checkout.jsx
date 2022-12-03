import Image from "next/legacy/image";
import React from "react";
import Header from "../components/Header";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
            <div>
              <h2>Item 1</h2>
            </div>
          </div>
        </div>

        {/* Right */}
      </main>
    </div>
  );
}

export default Checkout;
