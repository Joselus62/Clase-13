import React, { useState } from "react";
import './Movies.css';

export default function Movies(props) {

    const [count, setCount] = useState(1);

    // se usa sólo si viene data en los props.
    const myList = props.data.map( (element) => {
        return ( <h2>{ element }</h2>)
    } );

    const transformedChildren = props.children.map ( (element) => {
        return ( <ul><li> { element }</li></ul>)
    } );

    return ( <>
                <button className="btn-size me-2" variant="success" onClick={() => setCount(count + 1)}>
                    Add one movie
                </button>
                <button className="btn-btn" variant="warning" onClick={() => setCount(count - 1)}>
                    Substract one movie
                </button>
                 { transformedChildren.slice(0,count) }
                 { myList }
        </> );
}

