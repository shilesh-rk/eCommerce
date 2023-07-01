import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from 'react-router-dom'


export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    
    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    },[]);


    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            </>
        )
    }
    
    const filterProduct = (cat) => {
        const updatedList = data.filter((filterData)=> filterData.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return(
            <>
            <div className="buttons d-flex justify-content-center mb-5">
                <button className="btn btn-outline-info text-black me-2 " onClick={()=>setFilter(data)}>All</button>
                <button className="btn btn-outline-info text-black me-2 " onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="btn btn-outline-info text-black me-2 " onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <button className="btn btn-outline-info text-black me-2 " onClick={()=>filterProduct("jewelery")}>jewellery</button>
                <button className="btn btn-outline-info text-black me-2 " onClick={()=>filterProduct("electronics")}>Electronics</button>
            </div>
            {filter.map((product) => {
                return(
                    <>
                    <div className="col-md-3 mb-2">
                    <NavLink to={`/products/${product.id}`} className="text-decoration-none">
                    <div className="card card1 h-10 text-center p-4 border-info" key={product.id}>
                    <img src={product.image} className="card-img-top" height="200px" alt={product.title}/>
                    <div className="card-body">
                    <h5 className="card-title mb-0 text-black">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold text-black">${product.price}</p>
                    <button className="btn btn-outline-info text-black" onClick={() => addProduct(product)}>Buy Now</button>
                 </div>
                 </div>
                    </NavLink>
                    </div>
                    </>
                )
            })}
            </>
        )
    }

  return (
    <div>
        <div className="container my-1 py-1">
            <div className="row">
                <div className="col-12 mb-2">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    </div>
  )
}
