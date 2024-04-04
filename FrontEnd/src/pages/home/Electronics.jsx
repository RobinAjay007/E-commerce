import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';


const Electronics = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");
    const bestSeller=products.filter((item)=>{return(item.status==="Best Selers")})
  
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
          ? (products)
          : products.filter((item) => {
              return item.category === category;
            });
  
      setFilteredItems(filtered);
      setSelectedCategory(category);
    };
  
    const showAll = () => {
      setFilteredItems(products);
      selectedCategory("all")
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
          sortedItems.sort((a, b) => a.title.localeCompare(b.title))
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
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-28 xl:mt-[10rem] mt-[5rem]">
    {/* <h2 className="title">Or subscribe to the newsletter</h2> */}
    <h2 className="title">Best sellers</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per{" "}
        </p>



        <div className='mb-16 sm:mt-7 mt-[7rem]'>
      <Swiper  
      slidesPerView={1}
        spaceBetween={10}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            bestSeller?.map((Products)=>{
                return(
                <SwiperSlide key={Products.id}>
                     <Link to={`/shop/${Products.id}`}>
                            <img src={Products.image} alt="" className='mx-auto w-full hover:scale-105 '/>
                        </Link>
                        <div className='mt-4 px-4'>
                           <h4 className='text-base font-semibold mb-2'>{Products.title}</h4>
                           <div className='flex justify-between'>
                            <p className='text-black/50'>{Products.category}</p>
                            <p className='font-semibold'>{Products.price}</p>
                           </div>
                        </div>

                </SwiperSlide>
                )
            })
        }
      </Swiper>
      </div>

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
            onChange={(e) =>{ handleSortChange(e.target.value)}}
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
  )
}

export default Electronics