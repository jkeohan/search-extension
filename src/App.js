import React, { useState, useEffect } from 'react';
import * as SDK from 'dc-extensions-sdk';
import './App.css';
import Gif from './Components/Gif';
import Form from './Components/Form';

export default function App() {
  const [gifSrc, setGifSrc] = useState({});

  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = 'W9ThL38OlmMnIif0P13v036495Y4OMVA';
  console.log(apiKey + 'apiKey');

	useEffect(() => {
		const initialize = async () => {
			const sdk = await SDK.init();
      console.log('sdk', sdk);
		};
		initialize();
	}, []);

  const makeApiCall = async () => {
    const gifSrc = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    try {
      const res = await fetch(gifSrc);
      const json = await res.json(); 
      console.log('makeApiCall', json.data);
      setGifSrc({ image_url: json.data.images.downsized_large.url });
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  const handleSubmit = async (val) => {
    if(val) {
      const gifSrc = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${val}&limit=1`;
      const res = await fetch(gifSrc);
      const json = await res.json();
      console.log('handleSumbit', json.data[0].images.downsized_large.url );
      setGifSrc({ image_url: json.data[0].images.downsized_large.url });
    } else {
      makeApiCall()
    }
  };

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <br />
      <br />
      {gifSrc.image_url ? (
        <Gif gifSrc={gifSrc} />
      ) : (
        <h2>Pull random gifs from Giphy</h2>
      )}
    </div>
  );
}
