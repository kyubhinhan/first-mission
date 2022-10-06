export default function Card(props){
  const {cardInfo} = props
  const targetCard = cardInfo[cardInfo.length-1]
  const {company,team,name,email,phoneNumber} = targetCard

  return(
    <div>
      <div>당첨자</div>
      <div>이름 : {name}</div>
      <div>회사 : {company}</div>
      <div>팀 : {team}</div>
      <div>이메일 : {email}</div>
      <div>휴대폰 : {phoneNumber}</div>
    </div>
  )
}