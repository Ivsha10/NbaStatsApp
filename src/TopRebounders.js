import { useState, useEffect } from "react";

const TopRebounders = () => {
    const [data, setData] = useState([]);
    console.log(document.URL);
    let URL = '';
    const fetchData = async function() {
        let controller = new AbortController();
        try {
            if(document.URL.includes('toprebounders')) URL = 'https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/2023/'
            const response = await fetch(URL, {signal: controller.signal});
            const result = await response.json();
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
        list.push([item['player_name'], item['team'], item['TRB']]);
   }
    return (
        <form className="playerbyname">
        <ul className="topscorerscontainer">
           {list.map(item => 
            <li className="scoreritem">
                Name: {item[0]} <br/> Team: {item[1]} <br/> Rebounds: {item[2]}
            </li>)}
        </ul>            
    </form>         
    )
}

export default TopRebounders
