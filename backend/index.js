//import express from "express";

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Helloworld");
});

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Iphone",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 2,
      name: "Iphone 15 pro Max",
      price: 300,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 3,
      name: "Asus Rog Phone 7",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 4,
      name: "Asus Rog Phone 8 pro",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 5,
      name: "Samsung Phone 23 pro",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 6,
      name: "Samsung Phone 23 pro Max",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 7,
      name: "Oppo Phone",
      price: 300,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 8,
      name: "Motorola Phone ultra",
      price: 200,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 9,
      name: "HTC Phone ultra 23",
      price: 500,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 10,
      name: "HTC Phone ultra 21",
      price: 100,
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(req.query.search.toLowerCase())
    );
    res.send(filterProducts);
    return;
  }

  //else if (req.query.search) {
  //   const filterPrice = products.filter((product) =>
  //     product.price.include(req.query.search)
  //   );
  //   console.log("Q", req.query.search);
  //   res.send(filterPrice);
  //   return;
  // }

  setTimeout(() => {
    res.send(products);
  }, 2000);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`);
});
