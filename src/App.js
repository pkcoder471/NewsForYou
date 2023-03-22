import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 

const App=()=> {
  const pageSize=9;
  const [progress, setprogress] = useState(0)
  


   
    return (
    <><BrowserRouter>
    <LoadingBar
        color='#f11946'
        progress={progress}
      />
    <Navbar/>
    
    <Routes>
      <Route exact path="/" element={<News setprogress={setprogress}key="general"  pageSize={pageSize} country='in' category='general'/>}></Route>
      <Route exact path="/business" element={<News setprogress={setprogress}key="business" pageSize={pageSize} country='in' category='business'/>}></Route>
      <Route exact path="/entertainment" element={<News setprogress={setprogress}key="entertainment" pageSize={pageSize} country='in' category='entertainment'/>}></Route>
      <Route exact path="/general" element={<News setprogress={setprogress}key="general" pageSize={pageSize} country='in' category='general'/>}></Route>
      <Route exact path="/health" element={<News setprogress={setprogress}key="health" pageSize={pageSize} country='in' category='health'/>}></Route>
      <Route exact path="/science" element={<News setprogress={setprogress}key="science" pageSize={pageSize} country='in' category='science'/>}></Route>
      <Route exact path="/sports" element={<News setprogress={setprogress}key="sports" pageSize={pageSize} country='in' category='sports'/>}></Route>
      <Route exact path="/technology" element={<News setprogress={setprogress}key="technology" pageSize={pageSize} country='in' category='technology'/>}></Route>
  </Routes>
  </BrowserRouter>

      
    </>
      
    )
  
}

export default App


