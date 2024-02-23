import { Header } from "./components/Header"
import { ResultsTable } from "./components/ResultsTable"
import { UserInput } from "./components/UserInput"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <UserInput 
            label="Initial Investment" 
            id="initial-investment" 
            placeholder="15000" 
          />
          <UserInput 
            label="Annual Investment" 
            id="annual-investment" 
            placeholder="5000" 
          />
          <UserInput 
            label="Expected Return" 
            id="expected-return" 
            placeholder="50000" 
          />
          <UserInput 
            label="Duration" 
            id="duration" 
            placeholder="2" 
          />
        </section>

        <ResultsTable />
      </main>
    </>
  )
}

export default App
