import { useState } from "react";
import products from "./db/data";
import { Sidebar } from "./Sidebar/Sidebar";
import { Navigation } from "./Navigation/Navigation";
import { Products } from "./Products/Products";
import { Recommended } from "./Recommended/Recommended";
import { Card } from "./components/Card";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ----------INPUT FILTER----------
  const handleInputChange = (e) => setQuery(e.target.value);

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------RADIO FILTER----------
  const handleChange = (e) => setSelectedCategory(e.target.value);

  // ----------BUTTON FILTER----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
    setQuery("");
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <div className="row m-0">
        <div className="col-0 col-sm-2 position-fixed">
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center m-0 p-0 ms-md-5 ps-md-5">
          <Recommended handleClick={handleClick} />
          {result.length > 0 ? (
            <Products result={result} />
          ) : (
            <h2 className="text-danger mt-4 text-center p-5">
              SORRY!!! NO SHOES FOUND BASED ON YOUR SEARCH
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
