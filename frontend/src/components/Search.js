
 import React, { useState } from 'react'
 import {useNavigate} from 'react-router-dom';

export const Search = () => {
 
   const [keyword,setKeyword] = useState();
  const navigate = useNavigate()
  
  function searchHandler(){
    navigate('/search?keyword='+keyword);
  }
  
  return (
    <div className="input-group">
      <input
        type="text"
        id="search_field"
        className="form-control"
        placeholder="Enter Product Name ..."
        onChange={(e)=>setKeyword(e.target.value)}
       onBlur={searchHandler}
      />
      <div className="input-group-append">
        <button id="search_btn" className="btn " >
          <i className="fa fa-search text-white" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  )
}
