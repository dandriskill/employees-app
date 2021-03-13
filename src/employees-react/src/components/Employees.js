import "../styles/Employees.css";

function Employees({ employees }) {
    return (
        <div className="employees">
            {employees.map(({ name, email, location }) => (
                <div className="employee" key={email}>
                    <p>{`${name.first} ${name.last}`}</p>
                    <p>{email}</p>
                    <p>{`${location.city}, ${location.country}`}</p>
                </div>
            ))}
        </div>
    );
}

export default Employees;