import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Navbar from 'react-bootstrap/esm/NavbarBrand';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';


export default function MoiveCart({data}){

 

    return(
      <>
      {data?.length>0?(
        <div className='row'>
         {data.map(data=>(
         <Card className="m-5" style={{ width: '12rem' }} >
      <Card.Img variant="top"  style={{ width: '8rem',height:'8rem' }} src={data.Poster}/>
      <Card.Body>
        <Card.Title>Movie: {data.Title} </Card.Title>
        <p>Year: {data.Year} </p>
        
      </Card.Body>
    </Card>
    ))}
        </div>
        ):(
          <div>
            <h2>Movie Not Found</h2>
          </div>
        )}
        </>
        
    )
}