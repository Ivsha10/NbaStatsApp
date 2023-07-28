import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import ListItem from "./ListItem";
const ComparePlayers = () => {
    const [name1, setName1] = useState();
    const [name2, setName2] = useState();
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();

    const fetchData = async function () {
        try {
            const response1 = await fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${name1}`);
            const rawData1 = await response1.json();
            let results1 = await rawData1.results[0];
            let keys1 = Object.keys(results1);
            keys1.forEach(key => {
                (/\./).test(results1[key]) ? results1[key] = Number(results1[key]) : results1[key] = results1[key];
            })
            if (rawData1) { setData1(results1) }
            if (rawData1.count === 0) setData1(['Player not found']);

        } catch (err) {
            setData1(['Please enter player name'])
        }

        try {
            const response2 = await fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/name/${name2}`);
            const rawData2 = await response2.json();
            let results2 = await rawData2.results[0];
            let keys2 = Object.keys(results2);
            keys2.forEach(key => {
                (/\./).test(results2[key]) ? results2[key] = Number(results2[key]) : results2[key] = results2[key];
            })
            if (rawData2) { setData2(results2) }
            if (rawData2.count === 0) setData2(['Player not found']);

        } catch (err) {
            setData2(['Please enter player name'])
        }

    };
    const handleSubmit = async () => {
        await fetchData();
        setName1('');
        setName2('');
    }
    return (

        <form onSubmit={(e) => e.preventDefault()}>
            <div className="formcontrols">
            <input className="bynameinput" type="text"
                    required
                    onChange={(e) => setName1(e.target.value)}
                    value={name1}
                    placeholder="Enter Player Name">
                </input>
                <button  onClick={async () => {  await handleSubmit() }}>Compare</button>
                <input className="bynameinput" type="text"
                    required
                    onChange={(e) => setName2(e.target.value)}
                    value={name2}
                    placeholder="Enter Player Name">
                </input>
            </div>
             
            <div className="playercontainer">
               
                {data1 && <ul className="statcontainer">
                    <ListItem data={data1} />
                </ul>}
            </div>

            <div className="comparecontainer">
                <ul className="statcontainer" >
                    {data1 && data2 && Object.keys(data1).map(key => Object.keys(data1).indexOf(key) < 3 ? <li className="compareitem">  </li> :
                    Object.keys(data1).indexOf(key) >= 28 ? <li className="compareitem">  </li> :
                    data1[key] > data2[key] ? <li className="compareitem" style={{color: 'green'}}><FaGreaterThan/></li> : <li className="compareitem" style={{color: 'red'}} ><FaLessThan/></li>
                    )}
                </ul>

            </div>

            <div className="playercontainer">
                
                {data1 && data2 && <ul className="statcontainer">
                    <ListItem data={data2} />
                </ul>}

            </div>




        </form>
    )
}

export default ComparePlayers
