import { useState } from "react";
import { Header } from "./components/Header";
import { ResultsTable } from "./components/ResultsTable";
import { UserInput } from "./components/UserInput";

function App() {
  const [ userInvestment, setUserInvestment ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 10,
    duration: 3
  });

  function handleChange (inputIdentifier, newValue) {
    setUserInvestment ( prevUserInvestment => {
        return {
            ...prevUserInvestment,
            [inputIdentifier]: Number(newValue)
        };
    });
};

	return (
		<>
			<Header />
			<main>
				<section id="user-input">
					<UserInput 
            label="Initial Investment" 
            id="initialInvestment"
            onChange={handleChange}
            userInvestment={userInvestment.initialInvestment}
          />

					<UserInput 
            label="Annual Investment" 
            id="annualInvestment" 
            onChange={handleChange} 
            userInvestment={userInvestment.annualInvestment}
          />

					<UserInput 
            label="Expected Return" 
            id="expectedReturn" 
            onChange={handleChange} 
            userInvestment={userInvestment.expectedReturn}
          />

					<UserInput 
            label="Duration" 
            id="duration" 
            onChange={handleChange} 
            userInvestment={userInvestment.duration}
          />
				</section>

				<ResultsTable userInvestment={userInvestment} />
			</main>
		</>
	);
}

export default App;
