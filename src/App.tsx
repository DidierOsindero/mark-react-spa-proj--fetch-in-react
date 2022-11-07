import { useState } from "react";

interface Image {
  message: string,
  status: string
}

function App() {
  const [imageURL, setImageURL] = useState<string>();
  const [imageArray, setImageArray] = useState<string[]>([])
  console.log("Current imageURL: ",imageURL)
  console.log("Current imageArray: ",imageArray)

//   const handleGetJoke = async () => {
//     const response = await fetch(
//       "https://jokestemp.neillbogie.repl.co/jokes/general/random"
//     );
//     const jsonBody: Joke[] = await response.json();
//     setJoke(jsonBody[0]);
//   };

  const handleGetImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((jsonBody: Image) => {
        setImageURL(jsonBody.message)
        setImageArray([...imageArray,jsonBody.message])
      });
  };



  if (imageURL) {
    return (
      <div>
        <h1>Dog Image app</h1>
        <details>
          <summary>Here's your image:</summary>
          <img src={imageURL} alt=""/>
        </details>
        <hr />
        <button onClick={handleGetImage}>Get another image</button>
        <hr />
        <div className="imageGrid">
          {imageArray.map((image) => {
            return (
              <>
                <img src={image} alt=""/>
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog Image app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          image of a dog from an API!
        </p>
        <button onClick={handleGetImage}>Get image</button>
      </div>
    );
  }
}

export default App;
