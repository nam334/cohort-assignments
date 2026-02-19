import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import useProducts from "./hooks/useProducts";
import CategoryFilter from "./components/CategoryFilter";

const InfiniteScrollPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  // const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState("");

  const { loading, error, products, hasMore } = useProducts(page);

  const loaderRef = useRef(null);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (
          entry.isIntersecting &&
          !loading &&
          hasMore &&
          search === "" &&
          category === ""
        ) {
          setPage((prev) => prev + 1);
          console.log("Bottom reached");
        }
      },

      {
        root: null,
        rootMargin: "200px",
        threshold: 1.0, // only trigger when fully visible
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, hasMore, search, category]);

  // useEffect(() => {
  //   setPage(1);
  // }, [search, category]);

  const filteredProducts = products?.filter((product) => {
    const searchedProducts = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const filteredProducts =
      category === "" ||
      product.category.toLowerCase() === category.toLowerCase();

    return searchedProducts && filteredProducts;
  });
  //   useEffect(() => {
  //     if (products?.products) setFilteredData(products?.products);
  //   }, [products?.products]);

  //   useEffect(() => {
  //     if (category.length > 0) {
  //       let result = [];
  //       products?.products?.map((product) => {
  //         if (product.category === category) {
  //           //return
  //           result.push(product);
  //         }
  //       });

  //       setFilteredData(result);
  //     }
  //   }, [category]);

  //   const searchProduct = () => {
  //     let result = [];
  //     products?.products?.map((product) => {
  //       if (product.title.toLowerCase().includes(search)) {
  //         //return
  //         result.push(product);
  //       }
  //     });

  //     setFilteredData(result);
  //   };

  console.log(products);
  if (loading) return <>Loading..</>;
  if (error) return <>Error..</>;

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      {!filteredProducts?.length && search?.length ? (
        <h3>No results found</h3>
      ) : (
        <>
          <button onClick={() => setPage(2)}>Load Page 2 Again</button>

          <ProductList filteredData={filteredProducts} />
          <div ref={loaderRef} style={{ height: "50px" }}></div>
        </>
      )}
    </>
  );
};

export default InfiniteScrollPage;
