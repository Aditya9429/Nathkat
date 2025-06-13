import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

function GlobalState(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  const [filterItem, setFilterItem] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItem, setCartItem] = useState({});

  function addToCart(itemId) {
    const carData = { ...cartItem };
    if (carData[itemId]) {
      carData[itemId] += 1;
    } else {
      carData[itemId] = 1;
    }
    setCartItem(carData);
  }

  function getCartCount() {
    let totalCount = 0;
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        totalCount += cartItem[itemId];
      }
    }
    return totalCount;
  }
  function updateQuantity(itemId,quantity){
    let carData = {...cartItem};
    carData[itemId] = quantity;
    setCartItem(carData)
  }
  function getCartTotal() {
  let totalAmount = 0;
  for (const item in cartItem) {
    const itemId = Number(item); 
    const itemInfo = product.find((product) => product.id === itemId);
    if (itemInfo && cartItem[item] > 0) {
      totalAmount += itemInfo.price * cartItem[item];
    }
  }
  return totalAmount;
}

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  async function fetchProduct() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/products?limit=100");
      const result = await apiResponse.json();
      console.log(result);
      if (result && result.products && result.products.length > 0) {
        
        setProduct(result.products);
        setFilterItem(result.products);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  function removeCart(itemId){
   setCartItem((prev) => ({...prev,[itemId] : prev[itemId] -1 }))
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    console.log("Cart updated:", cartItem);
  }, [cartItem]);

  if (loading) {
    return <h1>Loading, please wait...</h1>;
  }


  const value = {
    product,
    setProduct,
    loading,
    theme,
    toggleTheme,
    filterItem,
    setFilterItem,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    removeCart,
    updateQuantity,
    getCartTotal
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
}

export default GlobalState;
