import "@/styles/globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "./Components/Admin/Sidebar";

export default function App({ Component, pageProps }) {
  let [client, setClient] = useState(false)
  // useEffect(() => {
  getUser()
    .then(user => {
      console.log(user, "user from local storage")
      if (user) { 
        setClient(true)
      }
      else {
        setClient(false)
      }
    })

  async function getUser() {
    return localStorage.getItem('jwt') ? await JSON.parse(localStorage.getItem('jwt')) : false
  }
  // }, [])

  return (

    <>

      {
        client ?
          <>
            <div className="flex">
              <div className="w-1/4">
                <Sidebar />
              </div>
              <div className="w-3/4">
                <Component {...pageProps} />;
              </div>

            </div>

          </>
          :
          <>
            <Header />
            <Component {...pageProps} />;
            <Footer />
          </>
      }


    </>


  )

}
