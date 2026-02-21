export const uiSchema = {
  type: "div",
  props: { className: "container" },
  children: [
    {
      type: "h2",
      props: { className: "title", text: "Product Listing" },
    },
    {
      type: "div",
      props: { className: "product-card" },
      children: [
        {
          type: "div",
          props: { className: "product-header" },
          children: [
            {
              type: "p",
              props: { className: "product-name", text: "Nike Shoes" },
            },
            {
              type: "p",
              props: { className: "product-price", text: "$120" },
            },
          ],
        },
        {
          type: "div",
          props: { className: "product-description" },
          children: [
            {
              type: "p",
              props: {
                text: "Comfortable running shoes with breathable mesh.",
              },
            },
            {
              type: "div",
              props: { className: "ratings-section" },
              children: [
                {
                  type: "span",
                  props: { className: "rating", text: "4.5 ⭐" },
                },
                {
                  type: "span",
                  props: { className: "reviews", text: "(200 reviews)" },
                },
              ],
            },
          ],
        },
        {
          type: "div",
          props: { className: "action-section" },
          children: [
            {
              type: "button",
              props: { className: "buy-btn", text: "Buy Now" },
            },
            {
              type: "button",
              props: { className: "cart-btn", text: "Add to Cart" },
            },
          ],
        },
      ],
    },
  ],
};
