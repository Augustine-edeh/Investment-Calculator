import Header from "../src/Components/Header/Header";
import UserInput from "./Components/UserInput/UserInput";
import ResultsTable from "../src/Components/ResultsTable/ResultsTable";

function App() {
  return (
    <div>
      <Header />
      <UserInput />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <ResultsTable />
    </div>
  );
}

export default App;
