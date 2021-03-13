import axios from "axios";
import { useState, useEffect } from "react";
import Employees from "./Employees";

import "../styles/App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState("1");
  const [resultsPerPage, setResultsPerPage] = useState("10");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/employees?page=${page}&results=${resultsPerPage}`)
      .then((response) => {
        setEmployees(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, resultsPerPage]);

  return (
    <div>
      <h1>Employees</h1>
      <div className="employee-column-titles">
          <p>Name</p>
          <p>Email</p>
          <p>Location</p>
      </div>
      {employees.length ? <Employees employees={employees} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
