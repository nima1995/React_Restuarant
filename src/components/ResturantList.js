import React, { useState,useEffect} from 'react'
import ResturantCard from './ResturantCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ResturantListAction} from '../Actions/restListAction';
import { useDispatch, useSelector } from 'react-redux';


function ResturantList() {
    // create a state to hold all details of restuarants ,Which is initialised as an array
    const [allResturants,setResturant] = useState([])
    
    // function to call api to get all db.json
    //  const getResturant =async()=>{
    //     fetch('/db.json').then((result)=>{
    //         result.json().then((data)=>{
    //             setResturant(data.restaurants);
    //         })
    //     })
    //  }

     const dispatch = useDispatch()
     const result = useSelector(state=>state.restuarantReducer)
    //  destructuring
     const {restuarantList} = result

     console.log(allResturants);

     useEffect(()=>{
        // getResturant()
        dispatch(ResturantListAction())
     },[])

  return (
    <Row>
        {
            restuarantList.map((item)=>(
                <Col sm={12} md={8} lg={6} xl={3}>
                    <ResturantCard restuarant={item}/>
                </Col>
            ))
        }

    </Row>
  )
}

export default ResturantList