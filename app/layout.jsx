import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'


export const metadata = {
 title: "Prompt.Ai",
 description : "Discover & Share"
}

const RoutLayout = ({ children }) => {
 return (
  <Provider>
   <html lang="en">
    <body>
     <div className="main">
      <div className="gradient"></div>
     </div>

     <main className="app">
      <Nav />
      {children}
     </main>
    </body>
   </html>
  </Provider>
 );
}

export default RoutLayout