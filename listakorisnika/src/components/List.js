import React from "react";

const List = ({ userData }) => {

    return (
        <div>
            {userData.map((data) => {
                const { id, name, lastname, birth } = data;
               
              return( <ul key={id} className="list-group text-center py-2">
                    <div className="container">
                        <li className="list-group-item text-success">{name}</li>
                        <li className="list-group-item text-success">{lastname}</li>
                        <li className="list-group-item text-success">{birth}</li>
                    </div>
                </ul>)
            })
            }

        </div>
    )
}
export default List;