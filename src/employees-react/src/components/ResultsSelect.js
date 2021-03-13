import "../styles/ResultsSelect.css";

function ResultsSelect({ results, setResults }) {
    return (
        <div className="results-select-wrapper">
            <p>Results per page</p>
            <select onChange={(e) => setResults(e.target.value)} value={results}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
}

export default ResultsSelect;