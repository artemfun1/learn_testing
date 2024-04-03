
import { useState } from 'react'
import './App.css'
import { CardWithText } from './components/CardWithText'
import { CounterComp } from './components/CounterComp'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      
      <h1>Jest</h1>
      <div className="card">

    <CounterComp count={count} setCount={setCount} />
    <CardWithText count={count}  />

      </div>

    </>
  )
}

export default App
