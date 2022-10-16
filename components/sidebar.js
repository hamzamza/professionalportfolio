import { BsGithub,BsInstagram,BsTwitter ,BsLinkedin,BsFacebook} from "react-icons/bs";
function Sidebar({them , setDarkmod}) {
    return ( 
        <ul className=" sm:w-10    flex sm:flex-col items-center justify-center sm:fixed  left-5 bottom-0  ">
                   <li className="p-1 my-2">{<BsGithub/>}</li> 
                   <li className="p-1 my-2">{<BsInstagram/>}</li> 
                   <li className="p-1 my-2">{<BsLinkedin/>}</li> 
                   <li className="p-1 my-2">{<BsFacebook/>}</li> 
                   <li className=" hidden h-20  w-full sm:flex justify-center">

                    <div className="h-full w-0.5 bg-gray-300">

                    </div>
                   </li>


        </ul>
     );
}

export default Sidebar;