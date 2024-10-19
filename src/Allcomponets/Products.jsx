import React, { useState, useEffect } from "react";
const Loppingproducts = () => {
  const [newproducts, setProducts] = useState([]);
  //rahul// tockecc?   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
//custom-product private app access token == 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

  const fetchProducts = async () => {
    const response = await fetch("/admin/api/2024-10/products.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": "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",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setProducts(data.products || []);
    } else {
      console.error("Failed to fetch products:", response.statusText);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="sp-byb__grid" role="region" aria-label="Bundle products">
    {newproducts.length > 0 ? (
      newproducts.map((product) => (
          <div
            className="sp-byb__grid-item"
            data-filter-item
            data-filter-name={product.title}
            data-tag=""
          >
            <div className="sp-byb__card">
              <div className="sp-byb__card-discount">
                15% <br />
                off
              </div>
              <div className="sp-byb__card-image">
                {product.image && product.image.src ? (
                  <img
                    src={product.image.src}
                    alt={product.title}
                    width="320"
                    height="320"
                    loading="lazy"
                  />
                ) : (
                  <p></p>
                )}
              </div>
              <div className="sp-byb__card-info">
                <div className="sp-byb__card-title">{product.title}</div>
                <div className="sp-byb__card-price">
                  {product.variants && product.variants[0] ? (
                    `$${product.variants[0].price}`
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="sp-byb__card-actions">
                <a href={product.url} className="sp-byb__card-quick-view">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.28571"
                      d="M17.0358 8.99996c0 1.35014-3.5977 6.10714-8.03573 6.10714-4.438 0-8.035715-4.757-8.035715-6.10714 0-1.35012 3.597715-6.10714 8.035715-6.10714 4.43803 0 8.03573 4.75702 8.03573 6.10714Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.28571"
                      d="M9.00014 11.5714c1.42016 0 2.57146-1.1512 2.57146-2.57138 0-1.42016-1.1513-2.57143-2.57146-2.57143S6.42871 7.57986 6.42871 9.00002c0 1.42018 1.15127 2.57138 2.57143 2.57138Z"
                    ></path>
                  </svg>
                  Quick View
                </a>
                <div className="sp-byb__card-add-wrapper">
                  <div className="sp-byb__card-quantity" style={{ display: "none" }}>
                    <button className="sp-byb__card-quantity-minus">
                      -
                    </button>
                    <input
                      className="sp-byb__card-quantity-count"
                      type="text"
                      name="qty"
                    />
                    <button className="sp-byb__card-quantity-plus">
                      +
                    </button>
                  </div>
                  <button className="sp-product__card-add">
                    Add to Box
                  </button>
                </div>
              </div>
              <div className="sellingplansproducts"></div>
            </div>
          </div>
      ))
    ) : (
      <p></p>
    )}
  </div>
);
};
export default Loppingproducts;