import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Spinner from './spinner' 
import useGif from '../hooks/useGif.js'


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Taggif = () => {
  // const [Gif, setGif] = useState("");
  // const [Loading,setLoading]=useState(true);
const [tag,settag]=useState("");

//   ............................changehandler...............
function changeHandler(event){
    
settag(event.target.value);
}



// ...............fetch-data................
// async function fetchdata()
// {
//   setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=$ {tag}`;
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
const {Gif,Loading,fetchdata}=useGif(tag);
  // ..........................button-handler..............
  function clickhandler() {

fetchdata();
  }

  return (
    <div className=" flex flex-col mt-[15px] gap-y-5 items-center w-1/2  bg-blue-500 rounded-lg border border-black">
      {/* .........heading............... */}
      <h1 className=" mt-[20px]text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

      {/* ................image-section............. */}
      {
        Loading?(<Spinner/>):(
            <img 
      className="text-cenetr"
      src={Gif}  width="450"
      />
        )
      }
      {/* .........................imput-section....................... */}
        <input
        onChange={changeHandler}
        value={tag}
        className=" text-center mb-[20px] w-3/4 rounded-md text-black text-xl font-bold p-4"/>
      {/* ..................button................... */}
      <button
        className=" mb-[20px] w-3/4 bg-yellow-500 rounded-md text-black text-xl font-bold p-4"
        onClick={clickhandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Taggif;
