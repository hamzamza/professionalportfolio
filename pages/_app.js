import { DarkmodecontextProvider } from '../components/context/darkmodecontext'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return <DarkmodecontextProvider>
    <Component {...pageProps} />
  </DarkmodecontextProvider>
}

export default MyApp
