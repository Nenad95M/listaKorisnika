import React, { useState, useEffect } from "react";
import List from "./List.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
    const [userData, setUserData] = useState([]);
    const [reset, setReset]=useState(false);

useEffect(()=>{
    // fetch('./database.json').then((response)=>response.json()).then((data)=>{
    //     setUserData(data);
    // })
    const getData=async()=>{
    const res=await axios.get('./database.json');
    setUserData(res.data);
    }
    getData();
}, [reset])

    return (
        <div>
            <div className="container">
                <em className="text-success">Trenutno imamo {userData.length} korisnika u bazi</em>
                <List userData={userData} />
                <button onClick={()=>{setUserData([])}} className="btn btn-danger m-2">Isprazni listu</button>
                <button onClick={()=>{setReset([true])}} className="btn btn-success m-2">Popuni listu</button>

            </div>
        </div>
    )
}

export default App;
