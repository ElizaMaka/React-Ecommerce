import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const JsonContext = createContext(null);

const JsonServerContext = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [reviews, setReviews] = useState([]);
  // const [cartItemCount, setCartItemCount] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('rezise', handleResize);
  }, []);

  const FetchData = () => {
    axios.get('http://localhost:3031/category')
      .then(resp => setCategories(resp.data))
      .catch(error => console.log(error)),

    axios.get('http://localhost:3031/review')
      .then(resp => setReviews(resp.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    FetchData();
  }, [FetchData]);


  const addToCart = (itemId) => {
    // setCartItems((prev)=>({ ...prev, [itemId]:prev[itemId]+1 })); add to cart and total items
    // setCartItems((prev)=>({ ...prev, [itemId]:prev[itemId]-1 })); remove
    setCart(prevCart => [
      ...prevCart,
      { id: itemId, count: 1 }
  ]);
    // setCartItemCount(prevCount => prevCount + 1);
  }

  function truncateText(text, length) {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  }

  return (
    <JsonContext.Provider value={{ categories, addToCart, cart, windowWidth, reviews, truncateText }}>
      {children}
    </JsonContext.Provider>
  )
}

export default JsonServerContext
