import { useState } from "react";
import {FaSearch} from 'react-icons/fa';
import ListItem from "./ListItem";
const PlayerSection = () => {
   const [data, setData] = useState();
   const [name, setName] = useState();
    const fetchData = async function () {
        try{
            const response = await fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${name}`);
            const rawData = await response.json();
            let results = await rawData.results[0];
            let keys = Object.keys(results);
            keys.forEach(key => {
                (/\./).test(results[key]) ? results[key] = Number(results[key]) : results[key] = results[key];               
            })            
            if(rawData) {setData(results)}
            if (rawData.count === 0) setData(['Player not found']);
        } catch (err) {
            setData(['Please enter player name'])
        }
    };
    const  handleSubmit = async () => {
        await fetchData();
        setName('');
    }
    return (
       
            <form className="playerbyname" onSubmit={(e)=> e.preventDefault()} style={{width: 'fit-content'}}>
                <div className="formcontrols">
                <input className="bynameinput" type="text"
                        style={{width:'fit-content'}}
                        required
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        placeholder="Enter Player Name">
                        </input>
                <FaSearch style={{margin:'10px'}} className="search" role="button" type="submit" onClick={async()=> await handleSubmit()}/>
                </div>
                {data && <ul className="statcontainer">   
                    <ListItem data={data}/>
                </ul> }
                
            </form>
    )
}

export default PlayerSection
