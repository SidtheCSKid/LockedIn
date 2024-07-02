import React, {useState, useEffect} from 'react'

const Quote = () => {  
    const [quote, setQuote] = useState([]);
    let quoteFetched = false;

    let categories = ["attitude", "change", "courage", "dreams", "failure", 
    "fear", "good", "happiness", "health", "hope", "inspirational", "knowledge", 
    "learning", "life", "leadership", "success"];

    let category = categories[Math.floor(Math.random() * categories.length)];

    let options = {
        method: 'GET',
        headers: { 'x-api-key': 'EPtSOq9yPS/Uoq0N/eQhqg==hOlrO05esXOsl3Pi' }
      }

    let url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

    // useEffect(() => {
    //         fetch(url,options)
    //         .then(res => res.json()) // parse response as JSON
    //         .then(data => {
    //             if(!quoteFetched) {
    //                 quoteFetched = true;
    //                 console.log(data);
    //                 setQuote([data[0].quote, data[0].author]);
    //             }
    //         })
    //         .catch(err => {
    //             console.log(`error ${err}`)
    //         }); 
    // }, [])
    
  return (
    <div className="Quote">
        <p className='quote-text'>"The trouble with most people is that they think with their hopes or fears or wishes rather than with their minds."</p>
        <p className='author-text'>Will Durant</p>   
        {/* <p className='quote-text'>"{quote[0]}"</p>
        <p className='author-text'>{quote[1]}</p> */}
    </div>
  )
}

export default Quote