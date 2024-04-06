import './App.css';
import Header from './components/Header';
import CompanyVision from './components/CompanyVision';
import CompanyWorlflow from './components/CompanyWorlflow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <CompanyVision />
        <CompanyWorlflow />
        <FAQ />
        <Footer />

    </div>
  );
}

export default App;
