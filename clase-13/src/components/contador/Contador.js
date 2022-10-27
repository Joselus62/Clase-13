import React, { useState } from "react";

export default function Contador() {
const [count, setCount] = useState(10);
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );
}