import React, { useState } from "react";
import data from './database.js';
import List from "./List.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [userData, setUserData] = useState([]);

    return (
        <div>
            <div className="container">
                <em className="text-success">Trenutno imamo {userData.length} korisnika u bazi</em>
                <List userData={userData} />
                <button onClick={()=>{setUserData([])}} className="btn btn-danger m-2">Isprazni listu</button>
                <button onClick={()=>{setUserData(data)}} className="btn btn-success m-2">Popuni listu</button>

            </div>
        </div>
    )
}

export default App;
