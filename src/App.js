import './App.css';
import Header from './components/Header';
import CompanyVision from './components/CompanyVision';
import CompanyWorlflow from './components/CompanyWorlflow';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
        <Header />
        <CompanyVision />
        <CompanyWorlflow />
        <FAQ />
    </div>
  );
}

export default App;
