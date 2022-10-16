    import Link from "next/link";
    import Image from "next/image";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
function Navbar({them,setDarkmod}) {
        return (  <nav className={"flex justify-between p-3 items-center sticky top-0 w-full z-10 themchange " + them('bg-gray-100   ' , 'bg-darkmod ') }>
          <Link href='/'>
        <div
          className={
            " cursor-pointer p-1 rounded-xl  " +
            them("", "bg-gray-200 ")
          }
        >
          <div className="relative w-12 h-12  lg:w-20 lg:h-20">
          <Image src={"/../public/logo.png"} layout="fill" />
          </div>
        </div>
        </Link>
        <ul className=" flex gap-3 items-center">
          <li
            className={
              "rounded-full p-2 hover:scale-105 animate-spin-1 " +
              them(" bg-blue-400 ", "bg-gray-200 text-yellow-600")
            }
            onClick={() => {
              setDarkmod();
            }}
          >
            {them(
              <BsFillMoonFill className=" animate-spin-1" />,
              <BsFillSunFill className="animate-spin-1" />
            )}
          </li>
      <Link href='/home'>
      <li className=" cursor-pointer hover:border-b-2 border-blugreen ">
            Me
          </li></Link>
          
          <Link href='/mywork'>
      <li className=" cursor-pointer hover:border-b-2 border-blugreen ">
           myworks
          </li></Link>
          
  
         
      
          <li className=" cursor-pointer hover:border-b-2 border-blugreen ">
            contact
          </li>
        </ul>
      </nav> );
    }
    
    export default Navbar;

    