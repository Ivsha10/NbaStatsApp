import { useState, useEffect } from "react";

const TopAssists = () => {
    const [data, setData] = useState([]);
    console.log(document.URL);
    let URL = '';
    const fetchData = async function() {
        let controller = new AbortController();
        try {
            if(document.URL.includes('topassists')) URL = 'https://nba-stats-db.herokuapp.com/api/top_assists/totals/2023/'
            if(document.URL.includes('topassistsplayoffs')) URL = 'https://nba-stats-db.herokuapp.com/api/top_assists/playoffs/2023/'
            const response = await fetch(URL, {signal: controller.signal});
            const result = await response.json();
            console.log(result.results)
            setData(await result.results);
            
            controller.abort();
        } catch (err) {
            console.log('Error');
        }   
       controller.abort();
        
    }
   
    useEffect(()=>{
        fetchData()
    }, [document.URL])

   let list = [];
   for(let item of data) {
    if(data.indexOf(item) < 20)
        list.push([item['player_name'], item['team'], item['AST']]);
   }
    return (
        <form className="playerbyname">
            <ul className="topscorerscontainer">
               {list.map(item => 
                <li className="scoreritem">
                    Name: {item[0]} <br/> Team: {item[1]} <br/> Assists: {item[2]}
                </li>)}
            </ul>            
        </form>
            
    )
}

export default TopAssists
