import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from '@mui/material/Button';
import Wall from './components/Wall';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import News1 from './News'
import Tech from './components/Tech';
import './Nav.css';
import NewsList from './components/NewsList';
import Aside from './components/Aside';
import ROZ from './Razprpay'

import YoutubeEmbed from './YoutubeEmbed';
//import TextField from '@mui/material/TextField';

class Nav extends Component{
    render() {
    
        return(
        <><Router> 
        <section>            
            <ul><Link to ="/ROZ" underline="none" variant="soft"><h2>DnEwS</h2></Link>
                <li>                    
                
                    <Link to="/News">Apple News</Link>
                    <Link to="/Aside" underline="none" variant="soft"  level="body2">Tesla</Link>
                    <Link to="/NewsList">Business</Link>
                    <Link to="/Wall-Street-Journal">Wall Street</Link>
                    <Link to="/TechCrunch">TechCrunch</Link>  
                    <Link to="/Youtube">Videos</Link>
                   
                   
                   <input type='text' className='outlined-basic'/>
                    <Button variant="outlined" className='sbtn'>Search</Button>
                </li>              
            </ul>
            
            <Routes>
        
				<Route exact path='/News' element={<News1/>}></Route>
                <Route exact path='/Aside' element={<Aside/>}></Route>
                <Route exact path='/NewsList' element={<NewsList/>}></Route>
                <Route exact path='/TechCrunch' element={<Tech/>}></Route> 
                <Route exact path='/Wall-Street-Journal' element={<Wall/>}></Route>
                <Route exact path='/Youtube' element={<YoutubeEmbed/>}></Route>       
                
		</Routes>
        </section>
       
        </Router>
   </> )}
}
export default Nav;