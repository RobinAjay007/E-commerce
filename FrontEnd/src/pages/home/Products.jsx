import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  // filtereditems

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => {
            return item.category === category;
          });

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(products);
    selectedCategory("all");
  };

  // sort function
  const handleSortChange = (option) => {
    setSortOption(option);
    console.log(sortOption);

    // logic for sort

    let sortedItems = [...filteredItems];
    console.log(sortedItems);

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
    console.log(filteredItems);
  };
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-28">
      <h2 className="title">Products</h2>

      {/* product cards */}

      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* All button */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All Products</button>
            <button
              onClick={() => {
                filterItems("Dress");
              }}
            >
              Clothing
            </button>
            <button
              onClick={() => {
                filterItems("Hoodies");
              }}
            >
              Hoodies
            </button>
            <button
              onClick={() => {
                filterItems("Bag");
              }}
            >
              Bag
            </button>
          </div>

          {/* Sorting option */}

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className=" text-white w-4 h-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => {
                handleSortChange(e.target.value);
              }}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low-to-High</option>
              <option value="high-to-low">High-to-Low</option>
            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
