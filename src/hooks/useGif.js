import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
    const [Gif, setGif] = useState("");
    const [Loading,setLoading]=useState(true);

  

  
  
  // ...............fetch-data................
  async function fetchdata()
  {
    setLoading(true);
     
      const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
      const imagesource=data.data.images.downsized_large.url;
      setGif(imagesource);
      setLoading(false)
  }
  
  useEffect(()=>
  {
  fetchdata();
  },[])
  
   return {Gif,Loading,fetchdata}
    
}

export default useGif