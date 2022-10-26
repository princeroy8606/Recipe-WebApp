import "./App.css";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";
import Catagory from "./Components/Catagory";
import { BrowserRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';
import styled from "styled-components";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to={'/'}>Deliciousss</Logo>
      </Nav>
        <Search />
        <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo =styled(Link)`

text-decoration:none;
font-size:1rem;
font-weight:400;
font-family:"Lobster Two",cursive;
`;
const Nav =styled.div`

padding:4rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{
  font-size:2rem;
}
`



export default App;
