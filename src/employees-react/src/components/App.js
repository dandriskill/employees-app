import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/employees?page=1&results=20")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      {JSON.stringify(customers)}
    </div>
  );
}

export default App;
