"use client";
import React from "react";
import Image from "next/image";
import "../styles/products.css";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Rainbow 600", image: "/images/product-bottle1.png" },
  { id: 2, name: "Rio 650", image: "/images/product-bottle2.png" },
  { id: 3, name: "Big Bull 1300", image: "/images/product-bottle3.png" },
  { id: 4, name: "Rome 600", image: "/images/product-bottle4.png" },
  { id: 5, name: "Rainbow 600", image: "/images/product-bottle1.png" },
  { id: 6, name: "Sweetie 200", image: "/images/product-bottle6.png" },
];

const Products: React.FC = () => {
  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <div>
          <h2>Hydration Essentials</h2>
          <p>Discover Our Range of Premium Water Bottles</p>
        </div>

        <button className="view-more">VIEW MORE</button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.name}
                // width={100}
                // height={300}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <button className="learn-more">LEARN MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
