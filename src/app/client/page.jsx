import Link from "next/link";

export default function Client({params}){
  const clientId = params.clientId ?? 0
  return(
    <div>
      <h1>Серверный компонент</h1>
      <Link href='/'>Главная</Link>
      <Link href={`client/${clientId}`}>Юзер</Link>
    </div>
  )
}