import React, { useEffect, useState } from 'react'
import { FaFilter } from "react-icons/fa"
import Cards from '../../Components/Cards';

const Products = () => {

  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selecatedCategory, setselecatedCategory] = useState("all");
  const [sortOptions, setSortOptions] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data: " + error)
      }
    }
    fetchData();
  }, []);

  // Filtering item
  const filterItems = (category) => {
    const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setselecatedCategory(category);
  }

  // show all products
  const showAll = () => {
    setFilteredItems(products);
    selecatedCategory("all");
  }

  // Sorting
  const handleSortChange = (option) => {
    setSortOptions(option);

    // logic for sorting
    let sortedItems = [...filteredItems];
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
  }


  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 mb-12'>
      <h2 className='title'>Or subscribe to the newsletter</h2>
      {/* Products Card */}
      <div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center spac-y-3 mb-8'>
          {/* All buttons */}
          <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap mb-2'>
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodings</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
            <button onClick={() => filterItems("shoe")}>Shoe</button>
          </div>
          {/* Sorting option */}
          <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-Black p-2'>
              <FaFilter className='text-white h-4 w-4 ' />
            </div>
            <select
              id='sort'
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOptions}
              className='bg-Black text-white px-2 py-1 '>
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>

            </select>
          </div>
        </div>

        <Cards filteredItems={filteredItems} />
      </div>

    </div>
  )
}

export default Products