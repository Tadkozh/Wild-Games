
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Game.css';

export const Game = ({ game }) => {

    const [isDeleted, setIsDeleted] = useState(false);

    const handleDeleteClick = () => {
      setIsDeleted(!isDeleted);
    };

    //console.log(game);

    return (
      <div>
          {isDeleted ? null :
          <>
            { game && 
            <>
                <h3>{game.name}</h3>
                <p>Rate : {game.rating}</p>                                
                <img src={game.background_image} alt={game?.name} />
            </>  
            }
        
        

            <p><Link to={`/game/${game.id}`}>More details</Link></p>

            <button onClick={handleDeleteClick}>Delete from list</button>
          </>  

        }
      </div>
    );
}