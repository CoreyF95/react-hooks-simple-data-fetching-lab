import React, { useEffect, useState } from "react";

function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => setDog(data.message))
    }, [])

    if (!dog) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img alt="A Random Dog" src={dog}></img>
        </div>
    )
}

export default App