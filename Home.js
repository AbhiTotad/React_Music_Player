import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Artist from '../screens/Artist';
import Serach from '../screens/Serach';
import token from '../Util/token';
 
const URL ="https://api.spotify.com";
//api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization",`${token.id}`);

//properties
const reqOptions ={
    method:"GET",
    headers:apiHeaders,
    redirect:'follow'
}
function Home() {
    const [artist,setArtiest]=useState([]);
    useEffect(()=> {
        // searchHandler("Sonu Nigam");   
    },[]);
    const searchHandler = (artistName)=>
    {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`,reqOptions)
        .then(res =>
            res.json())
            .then(out => {
                console.log(`artist list =`,out);
                setArtiest(out.artists.items);
            }).catch(err => toast.error(err.message));
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center'>
                <h3 className='display-3'>React Music Player</h3>
            </div>
        </div>
        <div className='row'>
             
                <Serach serach={searchHandler}/>
            
        </div>
        <div className='row'>
            {
                artist.map((item,index) =>
                {
                    return <Artist key={index}{...item}/>
                })
            }
        </div>
    </div>
  )
}

export default Home