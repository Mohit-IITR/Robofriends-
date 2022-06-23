import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Robocards.css";
import Searchbar from './Searchbar';
import Cardinfo from './Cardinfo';

function Robocards() {

    const [values, setValues] = useState({
        cards: [],
        searchbox: '',
        filtercards: []
    });

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setValues({ cards: response.data, filtercards: response.data })
            }).catch(err => {
                console.log(err)
            })
    }, []);

    const inputHandler = (e) => {
        var input = e.target.value.toLowerCase()
        setValues({ ...values, searchbox: input })
    }

    useEffect(() => {
        let filtercards1 = values.cards.filter(cards => {
            return cards.name.toLowerCase().includes(values.searchbox)
        })
        setValues({ ...values, filtercards: filtercards1 })
    }, [values.searchbox])

    return (
        <div>
            <Searchbar searchHandler={inputHandler}></Searchbar>

            <div className="grid">
                {values.filtercards.map(filtercards =>
                    <Cardinfo filtercards={filtercards}></Cardinfo>)}
            </div>

        </div>
    )

}

export default Robocards