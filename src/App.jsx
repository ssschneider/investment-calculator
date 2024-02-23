import { useState } from "react"
import { Header } from "./components/Header"
import { ResultsTable } from "./components/ResultsTable"
import { UserInput } from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [ investmentData, setInvestmentData ] = useState({});
  const [ investmentsResults, setInvestmentResults ] = useState([]);

  function handleDurationVerification (event) {
    const durationField = Number(event.target.value);

    if (durationField < 1) {
      alert("You need to invest for at least a year.")
    }
  };

  function handleUserInputInvestmentData (event) {
    const fieldId = event.target.id;
    const userInvestment = Number(event.target.value);

    //console.log(fieldId, userInvestment);

    const calculateInvestments = calculateInvestmentResults({
      initialInvestment: 10000,
      annualInvestment: 5000,
      expectedReturn: 100000,
      duration: 5,
    });

    setInvestmentResults(calculateInvestments);
    //console.log(investmentsResults);
  };

  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <UserInput 
            label="Initial Investment" 
            id="initialInvestment" 
            placeholder="15000"
            onChange={handleUserInputInvestmentData}
          />
          <UserInput 
            label="Annual Investment" 
            id="annualInvestment" 
            placeholder="5000"
            onChange={handleUserInputInvestmentData} 
          />
          <UserInput 
            label="Expected Return" 
            id="expectedReturn" 
            placeholder="50000"
            onChange={handleUserInputInvestmentData}
          />
          <UserInput 
            label="Duration" 
            id="duration" 
            placeholder="2"
            onChange={handleUserInputInvestmentData}
            onEnded={handleDurationVerification}
          />
        </section>

        <ResultsTable investmentsResults={investmentsResults} />
      </main>
    </>
  )
}

export default App
