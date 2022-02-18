import { useEffect, useState } from 'react';
import axios from 'axios';
import { Game } from "./Game.jsx";
import './GameList.css';

export const GameList = () => {

    const [games, setGames] = useState([]);
    const [gamesRate, setGamesRate] = useState(false);


    const getDataFromApi = () => {
        axios.get(`https://apis.wilders.dev/wild-games/games/`)
        .then(response => {
            //console.log(response.data)
            setGames(response.data)
            })
        }
    
    useEffect(() => {
        getDataFromApi()
    }, []);

    console.log(games);
    console.log(games.filter(game => game.rating >= 4.5)) // My filter works

    const filterGameRate = () => {
        if (gamesRate === false) {
            setGamesRate(true)
            setGames(games.filter(game => game.rating >= 4.5)) // ! set Games et pas setGamesRate
        } else {
            setGamesRate(false)
            getDataFromApi()
        }
    }    
    
    return(
        <>
            <h1>Game List</h1>
            <button 
                type="button" 
                onClick={() => filterGameRate()}>{gamesRate ? 'All Games' : 'Best Games'}
                </button>
            <div className='game-container'>
                {
                    games
                    ? games.map(game => <Game key={game.id} game={game} />)
                    : 'Loading...'
                }

            </div>
        </>
    )
}