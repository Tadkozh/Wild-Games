import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const GameDetails = () => {

    const { id } = useParams();
    console.log(id)

    const [details, setDetails] = useState([]);
    
    const getDetailsFromAPI = () => {
        axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
        .then(response => setDetails (response.data))
    }
    console.log(details.name);

    useEffect(() => {
        getDetailsFromAPI()
    }, []);

    return (
      <div>
          { details && 
          <>
            <h2>{details.name}</h2>
            <p>id : {id}</p>
            <p>Rate : {details.rating}</p>
            <p>Released : {details.released}</p>
            {/* <p>{details.genres.map((add) => (<p key={add.id}> {add.split(":")[1]} </p>))}</p> */}
                                
            <img src={details.background_image} alt={details?.name} />
            {/* <video controls src={details.clip.clip}>video clip</video> */}
            
          </>  
            
          }  
      </div>
    );
}