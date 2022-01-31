import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Nav } from "./components/Nav";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
  return (
    <>
      <Header />
      <Nav />
      <Form />
      <Footer />  
      <GlobalStyle   />
    </>
  )
}

