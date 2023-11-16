/* eslint-disable no-undef */
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    document.getElementById('btnGo').addEventListener('click', (ev) => {
      const output = document.getElementById('result');

      if (!'EyeDropper' in window) {
        output.textContent = 'Sorry. No support for the Eyedropper API';
        return;
      }

      // @ts-ignore
      // eslint-disable-next-line no-undef
      const dropper = new EyeDropper();
      const abortController = new AbortController();

      dropper
        .open({ signal: abortController.signal })
        .then((result) => {
          console.log(result.sRGBHex);
          output.textContent = result.sRGBHex;
          output.style.borderLeftColor = result.sRGBHex;
        })
        .catch((err) => {
          output.textContent = err;
        });
    });

  }, []);

  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EyeDropper API</title>
        <script src="drop.js" defer></script>
        <link rel="stylesheet" href="drop.css" />
      </head>
      <body>
        <header>
          <h1>Hér er ég að nota EyeDropper API, finndu liti!</h1>
          <h2>Ég notaði líka React til að búa til verkefnið. Sjáið myndina!</h2>
        </header>
        <img src="logo192.png" width="200" height="200" alt="Engin mynd :("/>
        <main>
          <p>
            <button id="btnGo">Veldu lit</button>
          </p>
          <p><span id="result"></span></p>
        </main>
      </body>
    </div>
  );
}

export default App;