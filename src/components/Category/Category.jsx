import { Link } from 'react-router-dom'
import './category.css'

const Category = ({ categories }) => {
  return (
    <div>
       <div className='category'>
      {
        categories.map(item => (
          <Link to={`/menu/${item.id}`} key={item.id}>
            <div className='category-content' >
                <img src={item.image} alt="img" />
                <div className='overlay-text'>
                <h3>{item.name}</h3>
                </div>
            </div>
          </Link> 
        ))
      }
    </div>
    </div>
  )
}

export default Category
