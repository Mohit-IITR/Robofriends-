import React, { Component } from 'react'
import axios from 'axios'
import "./Robocards.css";
import Searchbar from './Searchbar';
import Cardinfo from './Cardinfo';

class Robocards extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            cards: [],
            searchbox : ''
        }
        this.inputHandler = this.inputHandler.bind(this);
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( response => {
            this.setState({
                cards: response.data
            })
        }).catch( err => {
            console.log(err)
        })
    }

    inputHandler(e)
    {
        var input = e.target.value.toLowerCase()
        this.setState({
            searchbox: input
        })
        
    }

    render() {
        const {cards,searchbox} =this.state
        const filtercards = cards.filter(cards => {
            return cards.name.toLowerCase().includes(searchbox)
        })

        return (
            <div>
                <Searchbar searchHandler = {this.inputHandler}></Searchbar>

                <div className="grid">
                    {filtercards.map(filtercards => 
                        <Cardinfo filtercards={filtercards}></Cardinfo>)}
                </div>
                
            </div>
        )
    }
}

export default Robocards