import { FC,  } from 'react'

type CounterCompProps={
  count:number
  setCount:React.Dispatch<React.SetStateAction<number>>
}

export const CounterComp:FC<CounterCompProps> = ({count,setCount}) => {

  return (
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  )
}
