import axios from "axios";
import { useState, useEffect } from "react";
import Employees from "./Employees";
import ResultsSelect from "./ResultsSelect";
import Pagination from "./Pagination";
import StandardModal from "./StandardModal";

import "../styles/App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [page, setPage] = useState("1");
  const [results, setResults] = useState("10");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/employees?page=${page}&results=${results}`)
      .then((response) => {
        setEmployees(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, results]);

  const handleSetResults = (newResults) => {
    // React batches these state updates into one! (I love React!)
    setResults(newResults);
    setPage("1");
  };

  const handleSelectEmployee = (employee) => {
    setCurrentEmployee(employee);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setCurrentEmployee(null);
  };

  return (
    <div>
      <h1>Employees</h1>
      <ResultsSelect results={results} setResults={handleSetResults} />
      <div className="employee-column-titles">
          <p>Name</p>
          <p>Email</p>
          <p>Location</p>
      </div>
      {employees.length ?
        <Employees employees={employees} selectEmployee={handleSelectEmployee} /> :
        <p>Loading...</p>
      }
      <Pagination page={page} setPage={setPage} />
      <StandardModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        currentEmployee={currentEmployee}
      />
    </div>
  );
}

export default App;
