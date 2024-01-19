import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FindMeBar from '../../components/FindMeBar/FindMeBar';
import './individualMenu.css'
import { JsonContext } from '../../context/JsonServerContext';
import axios from 'axios';

const IndividualMenu = () => {
    const { categories } = useContext(JsonContext);
    const { categoryId, itemId } = useParams();
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const category = categories.find(category => category.id === Number(categoryId));
    const category_name = category ? category.name : 'Category not found';

    useEffect(() => {
        axios.get('http://localhost:3031/menu')
            .then(res => setItems(res.data[categoryId]))
            .catch(error => console.log(error))
    }, []);

    const data = items.find(item => item.id === Number(itemId));
    return (
        <>
            <FindMeBar />
            <div className='individual-menu'>
                <div className="individual-menu-body">
                    <div className="individual-menu-heading">
                        <div className="title">
                            <h3>{category_name}</h3>
                            <div className="back">
                                <Link to="/menu">Menu</Link> <i className="fas fa-angle-right"></i>
                                <Link to={`/menu/${categoryId}`}>{category_name}</Link><i className="fas fa-angle-right"></i>
                                <Link>{data ? (data.name) : ""}</Link>
                            </div>
                        </div>
                    </div>

                    <div className="individual-menu-content">
                        {data ?
                            (
                                <div className="content-box">
                                    <div className="content-image">
                                        <img src="/image6.jpeg" alt="item" />
                                    </div>
                                    <div className="content">
                                        <div className="content-text">
                                            <h3>{data.name}</h3>
                                            <p>{data.description}</p>
                                        </div>
                                        <div className='content-btn'>
                                            <button>Start Order</button>
                                            <p onClick={()=>navigate(-1)} style={{cursor:"pointer", textDecoration:"underline"}}>Back to menu</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                
                                <div><p>no data</p></div>
                                )
                            }
                        </div>

                        {/* fact-sheet */}
                        <div className='fact-sheet'>
                            <div className='fact-sheet-content'>
                                <hr />
                                <p>Fact sheet</p>
                                <div className='content-text'>
                                <p>Notice: Approximate pre-cooked weights, actual weight may vary. May be cooked to order. Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.</p>
                                <p>Menu items may contain or come into contact with wheat, eggs, shellfish, tree-nuts, milk and other major allergens. If a person in your party has a food allergy, please contact the restaurant to place your order and notify our team of any allergy. Because routine food preparation techniques, such as common oil frying and use of common food preparation equipment and surfaces, may allow contact among various food items, we cannot guarantee any food items to be completely allergen-free.</p>
                                <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.</p>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}

export default IndividualMenu
