import React from 'react'
import Products from './Products'
export default function Home() {
    return (
        <div className='intro container'>

            <div className="card bg-dark text-warning border-0">
                <img src="https://img.freepik.com/free-vector/customers-with-phones-shopping-online_74855-4781.jpg?w=1060&t=st=1684401038~exp=1684401638~hmac=4b7dec7e5d3e62c56ee19e9b62ba33cb6a17a9d5ca97d7110cb94e66e7fc6abc" className="card-img" alt="back-ground" height="470px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-end text-center">
                    <div className="container">
                        {/* <h5 className="card-title display-4 fw-bolder mb-5">New Collection Arrivals</h5> */}
                        <p className="card-text fs-2 text-bg-info fw-bold text-white">WALK WITH THE TRENDS.</p>

                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
