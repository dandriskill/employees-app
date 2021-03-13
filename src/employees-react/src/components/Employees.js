import "../styles/Employees.css";

function Employees({ employees, selectEmployee }) {
    return (
        <div className="employees">
            {employees.map((employee) => (
                <div
                    className="employee"
                    key={employee.email}
                    onClick={() => selectEmployee(employee)}
                >
                    <p>{`${employee.name.first} ${employee.name.last}`}</p>
                    <p>{employee.email}</p>
                    <p>{`${employee.location.city}, ${employee.location.country}`}</p>
                </div>
            ))}
        </div>
    );
}

export default Employees;