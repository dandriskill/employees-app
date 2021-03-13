import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState("1");
  const [resultsPerPage, setResultsPerPage] = useState("20");

  useEffect(() => {
    axios.get(`http://localhost:3001/employees?page=${page}&results=${resultsPerPage}`)
      .then((response) => {
        setCustomers(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, resultsPerPage]);

  return (
    <div>
      <h1>Employees</h1>
      {JSON.stringify(customers)}
    </div>
  );
}

export default App;
