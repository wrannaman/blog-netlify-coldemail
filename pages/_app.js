import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </> 
  )
}

export default MyApp
