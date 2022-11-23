import React , { useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap'
import RestOP from './RestOP' 
import RestReview from './RestReview'
import { useDispatch, useSelector } from 'react-redux';



function ViewResturant() {
    const params= useParams()
    // console.log(params.id);

    // create a state to hold all details of restuarants ,Which is initialised as an array
    const [allResturants,setResturant] = useState([])
    
    // function to call api to get all db.json
     const getResturant =async()=>{
        fetch('/db.json').then((result)=>{
            result.json().then((data)=>{
                setResturant(data.restaurants);
            })
        })
     }
    //  console.log(allResturants);
     useEffect(()=>{
        getResturant()
     },[])

     const dispatch = useDispatch()
     const result = useSelector(state=>state.restuarantReducer)
     //  destructuring
      const {restuarantList} = result
 

     const viewRest=restuarantList.find((item)=>item.id==params.id)
     console.log(viewRest);



  return (
   <>
      {
        viewRest ?(
          <Row className='p-3'>
            <Col lg={3}>
            <Image src={viewRest.photograph} fluid />
            </Col>
            <Col>
            <p>ID: {viewRest.id}</p>
            <h1>{viewRest.name}</h1>
            <h5>Cusine Type : {viewRest.cuisine_type}</h5>
            <h5>Neighborhood : {viewRest.neighborhood}</h5>
            <h6>Address : {viewRest.address}</h6>
            <RestOP operate={viewRest.operating_hours}/>
            <RestReview reviews={viewRest.reviews}/>
            </Col>
          </Row>
        ):'null'
      }
   </>
  )
}

export default ViewResturant