import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';

class Collection extends Component {
    constructor(){
        super();
        this.state = {
            cards: []
        }
    }

    componentDidMount(){
        this.getCards()
    }

    getCards(){
        axios.get("https://api.pokemontcg.io/v1/cards")
        .then(res => {
            this.setState({
                cards: res.data.cards
            })
        }).catch(err => console.log(err))
    }

    render(){
        console.log("STATE: ", this.state)
        const mappedCards = this.state.cards.map( card => {
            return <Card key={card.id} name={card.name} img={card.imageUrl}/>
        })
        return(
            <div className="collection">
                {mappedCards}
            </div>
        )
    }
}

export default Collection;