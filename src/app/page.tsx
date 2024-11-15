import Image from "next/image";
import logo from '../../public/logo.svg'
import { fetchData } from './lib/utils/data'

export default async function Home() {
  const res = await fetchData()
  return (
    <>
      <p>home</p>
      <Image src={logo} alt='logo' width={24} height={24}/>

      <button>
        click to get data
      </button>
    </>
  );
}
