import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header';

function Button({text, onKlik}) {
  return <button onClick={onKlik}>{text}</button>
}

export default function App() {
  const[likes, setLikes] = useState(0);
  const [angka, setAngka] = useState(0);

  function handleClick() {
    setLikes(likes+1);
  }

  function operasiTambah() {
    setAngka(angka+1);
  }

  function operasiKurang() {
    setAngka(angka-1);
  }

  function reset() {
    setAngka(0);
  }



  return (
    <>
      < Button text={'+'} onKlik={operasiTambah} />
      <p>{angka}</p>
      < Button text={'-'} onKlik={operasiKurang} />
      < Button text={'Reset!'} onKlik={reset} />
      {/* <div>
        <Header/>
        <Header author={'Biagi'}/>
        <button onClick={handleClick}>Like ({likes})</button>
      </div>

      <div>
        <Button text={'+'}/>
      </div> */}
    </>
  )
  
}
