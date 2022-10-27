import React, { usestate } from "react";

export default function Movies(props) {

    const [count, setcount] = usestate(1);

    // se usa sólo si viene data en los props.
    const myList = props.data.map( (element) => {
        return ( <h2>{ element }</h2>)
    } );

    const transformedChildren = props.children.map ( (element) => {
        return ( <ul><li> { element }</li></ul>)
    } );

    return ( <>
                <button onClick={() => setcount(count + 1)}>
                    Add one movie
                </button>
                <button onClick={() => setcount(count - 1)}>
                    Substract one movie
                </button>
                 { transformedChildren.slice(0,count) }
                 { myList }
        </> );
}

