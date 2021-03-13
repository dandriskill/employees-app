import "../styles/Pagination.css";

function Pagination({ page, setPage }) {
    const parseNextPage = (moveForward) => {
        if (moveForward) return JSON.stringify(parseInt(page) + 1);
        else return JSON.stringify(parseInt(page) - 1 || 1);
    };

    return (
        <div className="pagination">
            <button type="button" onClick={() => setPage(parseNextPage(false))}>&#60;</button>
            <p>{page}</p>
            <button type="button" onClick={() => setPage(parseNextPage(true))}>&#62;</button>
        </div>
    );
}

export default Pagination;