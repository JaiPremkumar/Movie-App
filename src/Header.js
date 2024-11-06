import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import MoiveCart from './MovieCart';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export default function Header(){

  const navigate = useNavigate();

  const[data,setData]=useState([]); 
  const[search,setSearch]=useState("")
  const[page,setPage] = useState(2);
  const[perpage,setPerpage] = useState(4)
    

  useEffect(()=>{
      fetchApp() 
  },[])
      const API_KEY = 'https://www.omdbapi.com/?apikey=b6598dc0'
  const fetchApp=async(title)=>{
      const res = await fetch( `${API_KEY}&s=${title}`)
      const Db= await res.json()
      console.log(Db.Search)
      if(Db.Search){
        setData(Db.Search)
      }else{
        setData([]) 
      }
  }
       


  const lastPage = page * perpage;
  const firstPage =lastPage - perpage;
  const crtPage = data.slice(firstPage,lastPage)
 
    return(
        <>
        
         <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-white'>Moive-App</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="d-flex">
            <input
            type='text'
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}
            />
             <Button variant="outline-success" onClick={()=>fetchApp(search)}>Search</Button>
          </Form>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link  className='text-white'>Home</Nav.Link>
            <Nav.Link  className='text-white'>Link</Nav.Link>
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='bg-light'> 
              <NavDropdown.Item onClick={()=>fetchApp('Dc comics')}>DC comics</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>fetchApp('Marvel')}>
                Marvel
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>fetchApp('Game')}>Game</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <MoiveCart data={crtPage}/>
      <Pagination totalPage={data.length} postPage={perpage} setPage={setPage}/>
    </>

    )
}