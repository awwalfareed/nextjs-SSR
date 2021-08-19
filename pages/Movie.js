import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Movie() {
    const [list, setList] = useState([]);
    useEffect(() => {
        Axios({
            url: "http://www.omdbapi.com/?i=tt3896198&apikey=bb50b717"
        })
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setList]);

    return (
        <div>
            { list.map((item) => (
                    <p key={item.imdbID}>
                        {item.Title}
                    </p>
                ))
            }
        </div>
    )
}
