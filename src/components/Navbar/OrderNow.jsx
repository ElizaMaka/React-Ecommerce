import React from 'react'

const OrderNow = ({show, setShow}) => {

  return (
<div className={`order-now ${show ? "show" : ""}`}>
                <div className='order-now-title'>
                    <h6>START YOUR ORDER</h6>
                    <i className='fas fa-times' onClick={() => setShow((prev) => !prev)}></i>
                </div>
                <div style={{ width: "100%", height: '2px', background: "white", margin: "25px 0" }}></div>
                <div className='order-now-content'>
                    <div className='pickup'>
                        <i className='fas fa-box-archive'></i>
                        <div className='pickup-content'>
                            <h6 style={{ fontWeight: "700", fontSize: "20px" }}>Curbside</h6>
                            <p style={{ margin: "0px" }}>Pick your order at the restaurant</p>
                        </div>
                        <i className='fas fa-angle-right'></i>
                    </div>
                    <div className='delivery'>
                        <i className='fas fa-truck'></i>
                        <div className='delivery-content'>
                            <h6 style={{ fontWeight: "700", fontSize: "20px" }}>Delivery</h6>
                            <p style={{ margin: "0px" }}>Powered By doordash</p>
                        </div>
                        <i className='fas fa-angle-right'></i>
                    </div>
                </div>
            </div>
  )
}

export default OrderNow
