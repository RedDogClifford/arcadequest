import React, { useState, useEffect } from "react";
import md5 from 'js-md5';


var PUBLIC_KEY = "d3756bca412f9e28c6cdc06ee74f6f6e";
var PRIVATE_KEY = "bfda1a9da7a2fa74f173c0503b45d096b94e7aa5";
// var results = [];
var responseObj = {
    name: "",
    description: ""
}
// function addToResults(data) {
//     data.forEach( character => {
//         const temp = Object.create(responseObj);
//         temp.name = data.name;
//         temp.description = data.description;
//         results.push(temp);
//     })
//     console.log(results);
// }

class Result extends React.Component  {

    constructor(props){
        super(props);
        this.state = { 
            results: []
        };
    };

    componentDidMount() {
        const ts = Number(new Date());
        const hash = md5.create();
        hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
        fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&limit=10&nameStartsWith=${this.props.location.data}&apikey=d3756bca412f9e28c6cdc06ee74f6f6e&hash=${hash.hex()}`)
        .then(res => res.json())
        .then(marvel => 
            marvel.data.results.forEach(
                char => {
                    const temp = Object.create(responseObj);
                    temp.name = char.name;
                    temp.description = char.description;
                    this.state.results.push(temp);

                    console.log(temp); //can see the information
                    
                }
            )
            
        )
    }

    render() { 
        return(//doesn't work
            <div> 
                {this.state.results.map(names=>
                    <div>{names.name}</div>
                )}
            </div>
        );
    }

        
    
        
    
}



// function result(props){
//     const { data } = props.location;
//     console.log(data);
//     return (
    
//         <div>
//             {data}

//         </div>

//     );
// }

export default Result;