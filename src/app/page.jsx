"use client";
import { useState } from "react";

const frases = [
  "no",
  "segura?",
  "segura segura?",
  "segura segura segura?",
  "porfaa :'v",
];

function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return frases[Math.min(noCount, frases.length - 1)];
  }
  return (
    <div className="valentine-container gap-y-2 ">
      {yesPressed ? (
        <>
        <img src="/abeja.webp" alt="abeja" width={250} height={250}/>
        <h1 className="text-4xl">:DDD</h1>
        </>
      ) : (
        <>
          <img src="/perro.webp" alt="perro" width={250} height={250} />
          <h1 className="text-2xl">Querés ser mi novia? uwuwuw</h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            sim
          </button>
          <button
            className=""
            onClick={handleNoClick}
          >
            {getNoButtonText()}
          </button>

          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
            <a href="https://download2445.mediafire.com/mfpecf00huqgbBg0deINe1DWH0kTVgaDODmiDilxUUjDk5H_tjzF6XBotLak2n0IiTQBmBp7Gv4Qr700f7JcAeg4tWPAQTfyH93LltTuI4MOludtJL2H83E2JKZf_pyHjKgzwL9zj7n4TX2basrjU1grcPFzPQ8h4UQg_yDq6JHvFGA/bhb6gxjxjjf86t5/MINECRAFT+PE+1.20.60+ATUALIZADO+ByHT.apk">Maincra</a>
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
