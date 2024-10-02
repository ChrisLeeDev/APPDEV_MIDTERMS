import React, { useState } from "react";

export default function Quotes() {
    const quotes = [
        "1: \"Character is power\"",
        "2: \"Never be limited by other people’s limited imaginations\"",
        "3: \"You have within you, right now, everything you need to deal with whatever the world can throw at you.\"",
        "4: \"Only a life lived for others is a life worthwhile.\"",
        "5: \"If you fell down yesterday, stand up today.\"",
        "6: \"Dream as if you’ll live forever, live as if you’ll die today.\""
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextQuote = () => {
        setCurrentIndex((currentIndex + 1) % quotes.length);
    };
    
    const previousQuote = () => {
        setCurrentIndex((currentIndex - 1 + quotes.length) % quotes.length);
    };
    
    const randomQuote = () => {
        setCurrentIndex(Math.floor(Math.random() * quotes.length));
    };
    

    return (
        <div className="container">
            <p className="quotes-container">
                Quotes: <br />
                <br />
                {quotes[currentIndex]}
            </p>
            <div className="button-container">
                <button className="button-container-previous" onClick={previousQuote}>PREVIOUS</button>
                <button className="button-container-random" onClick={randomQuote}>RANDOM</button>
                <button className="button-container-next" onClick={nextQuote}>NEXT</button>
            </div>
        </div>
    );
}
