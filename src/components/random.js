import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Spinner from './spinner' 
import useGif from '../hooks/useGif.js'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
//   const [Gif, setGif] = useState("");
//   const [Loading,setLoading]=useState(true);
  


// async function fetchdata()
// {
//   setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data}=await axios.get(url);
//     const imagesource=data.data.images.downsized_large.url;
//     setGif(imagesource);
//     setLoading(false)
// }

// useEffect(()=>
// {
// fetchdata();
// },[])




// ..................calling custom hook..................


const {Gif,Loading,fetchdata}=useGif();

  // ..........................button-handler..............
  function clickhandler() {

fetchdata();
  }

  return (
    <div className=" flex flex-col mt-[15px] gap-y-5 items-center w-1/2  bg-green-500 rounded-lg border border-black">
      {/* .........heading............... */}
      <h1 className=" mt-[20px]text-2xl underline uppercase font-bold">A Random Gif</h1>

      {/* ................image-section............. */}
      {
        Loading?(<Spinner/>):(
            <img 
      className="text-cenetr"
      src={Gif}  width="450"
      />
        )
      }

      {/* ..................button................... */}
      <button
        className=" mb-[20px] w-3/4 bg-white rounded-md text-black text-xl font-bold p-4"
        onClick={clickhandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
