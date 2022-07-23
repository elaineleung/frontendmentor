// import { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="fs-body font-primary bg-white clr-neutral-500">
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
