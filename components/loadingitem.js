import Image from "next/image";

function LoadingItem() {
    return ( <div className="w-full h-screen flex items-center justify-center" > 

       <div className=" growingup animate-bounce transition">
       <Image src={"/../public/logo.png"} width={300} height={300} />
       </div>
    </div> );
}

export default LoadingItem;