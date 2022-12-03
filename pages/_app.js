import '../styles/global.css'
import Navbar from '../Components/navbar'

function MyApp({ Component, pageProps }) {
  return(<>
    <Navbar/>
   <Component {...pageProps} />
   </>
  )
}

export default MyApp