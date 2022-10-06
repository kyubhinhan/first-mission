import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import {fetchUser} from '../modules/api'
import cardStyle from '../componentsStyle/card.module.css'
import {useState} from 'react'
import Card from './Card'

export default function DrawCards(){
  let [winners, setWinners] = useState([])

  // react-query를 이용하여 마치 api로부터 데이터를 받는 것과 같이 구현해줌
  const queryClient = useQueryClient()
  const {data,isLoading,isError,error} = useQuery(['cards'],()=>{return fetchUser()},{
    staleTime : 1000*60*20,
    cacheTime : Infinity,
  })
  if(isLoading) return <h2>Loading...</h2>
  if(isError) return <h2>{error.message}</h2>

  const drawWinner = ()=>{
    if(winners.length >=3){
      window.alert(`이미 3명의 추첨을 완료하였습니다. 
      당첨자는 ${winners[0].name} ${winners[1].name}, ${winners[2].name} 입니다.
      축하합니다!! :) `)
      return
    }
    let randomNumber = Math.floor(Math.random()*(data.length))
    let winner = data.splice(randomNumber,1)
    setWinners([...winners,...winner])
  }

  return(
    <>    
      <div className={cardStyle.holder}>
        <div className={cardStyle.inner}>
          <div>명함 추천 어플리케이션에 온 것을 환영합니다.</div>
          <button onClick={()=>{drawWinner()}}>추첨하기</button>
        </div>
      </div>
      {winners.length !== 0 && <Card cardInfo={winners} />}
    </>
  )

}