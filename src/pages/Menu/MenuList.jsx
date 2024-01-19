import React, { useContext, useEffect, useState } from 'react'
import { JsonContext } from '../../context/JsonServerContext';
import { useParams, Link } from 'react-router-dom';
import FindMeBar from '../../components/FindMeBar/FindMeBar';
import axios from 'axios';

const MenuList = () => {
  const { addToCart, windowWidth, truncateText, categories } = useContext(JsonContext);
  const [menuList, setMenuList] = useState([]);

  let { categoryId } = useParams();

  const category = categories.find(category => category.id === Number(categoryId));
  const category_name = category? category.name : 'Category not found';

  useEffect(()=>{
    axios.get(`http://localhost:3031/menu`)
      .then(res => setMenuList(res.data[categoryId]))
      .catch(error => console.log(error))
  },[categoryId])

  return (
    <>
      <FindMeBar />
      <div className='menu-lists'>
        <div className='menu-lists-body'>
          <div className='menu-lists-heading'>
            <div className='title'>
              <h3>{category_name}</h3>
              <div className="back">
                <Link to="/menu">Menu</Link> <i className="fas fa-angle-right"></i>
                <Link>{category_name}</Link>
              </div>
              <div className="dropdown">
                <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {
                    categories.map(item => (
                      <Link  to={`/menu/${item.id}`} key={item.id}>  
                        <li><a className="dropdown-item" href="#">{item.name}</a></li>
                      </Link>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className='lists row'>
            
            {
             menuList && menuList.length > 0 ? (

               menuList.map(menu => {
                 return(
 
                 <div className="list" key={menu.id}>
                       <div className="list-top">
                         <Link to={`/menu/${categoryId}/${menu.id}`}>
                           <img src="/image5.jpeg" alt="img"/> 
                           </Link>
                       </div>
                       <div className="list-body">
                         <div className="content">
                           <Link to={`/menu/${categoryId}/${menu.id}`}>
                             <h5>{menu.name}</h5>
                             </Link>
                           <p>${menu.price}</p>
                           {
                             windowWidth > 576 ? <p> {truncateText(menu.description, 90)}</p> : ""
                           }
 
                         </div>
                         <button onClick={() => addToCart(menu.id)}>Add To Cart</button>
                       </div>
                     </div>
                 )
               })
             ):(
                <div style={{textAlign:"center"}}>
                  <p>No Menu List</p>
                </div>
             )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuList
