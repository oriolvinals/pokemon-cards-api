interface Prices { 
    tcgplayer:any;
}

const PriceCards = ({tcgplayer}:Prices)=>{
    return <div>{tcgplayer.updatedAt}</div>

}

export default PriceCards;