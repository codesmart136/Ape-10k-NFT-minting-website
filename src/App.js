import './App.css';

import Header from './component/header';
import Mint from './component/mint';
import About from './component/about';
import Roadmap from './component/roadmap';
import Team from './component/team';
import Faq from './component/faq';
import Footer from './component/footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Mint />
        <About />
        <Roadmap />
        <Team />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App;
