import { FC } from 'react'


type CardWithTextProps = {
  count:number

}

export const CardWithText:FC<CardWithTextProps> = ({count}) => {


  const arr=[]
  for(let i=0;i<count;i++){
      arr.push('some_text')
  }
console.log(arr)
  return (
    <div className='test'>
    {arr.map((string,i)=>(<p key={i}>{string}</p>))}
    </div>
  )
}
