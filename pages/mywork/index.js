import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { DarkmodContext } from "../../components/context/darkmodecontext";
import Email from "../../components/email";
import Layout from "../../components/layout";
import LoadingItem from "../../components/loadingitem";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

function Mywork() {
    const {darkmodOn  , setDarkmod} =  useContext(DarkmodContext)
    const [loaing , setloading] = useState(true);
    useEffect(()=>{
      setloading(true)
      setTimeout(() => {
        setloading(false)
      }, 200);
    },[])

    const them = (lightmod, darkmod) => {
        if (darkmodOn) return darkmod;
        else return lightmod;
      };

      return (
        <div
        className={
          them(" text-gray-500 bg-gray-100", "bg-darkmod  text-white") +
          " themchange"
        }
      >
  
      { loaing ? <div className=" w-full h-screen overflow-hidden"><LoadingItem/></div> : 
      <main className=" m-auto container min-h-screen ">
        <Layout/>
  <section className="min-h-screen flex justify-center items-center " > 
       <div>
       <h1 className="text-center text-4xl " >my work</h1>
       <div className="h-300"> d</div>
       <div className="h-300"> d</div>
       </div>
  </section>
   </main>}
    </div> );
}

export default Mywork;

// 0640222401