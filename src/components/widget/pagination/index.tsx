import "./pagination.scss";

const range = (start: number, end: number) => {
    return [...Array(end - start).keys()].map((el) => el + start);
};

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }:
    { pagesCount: number, pagesCutCount: number, currentPage: number }) => {

    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);
    //console.log("ceiling", ceiling);
    //console.log("floor", floor);

    if (pagesCount < pagesCutCount)
        return { start: 1, end: pagesCount + 1 };

    if (currentPage >= 1 && currentPage <= ceiling)
        return { start: 1, end: pagesCutCount + 1 };

    if (currentPage + floor >= pagesCount)
        return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };

    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
};

const PaginationItem = ({ page, currentPage, onPageChange, isDisabled }:
    { page: number | string, currentPage: number, onPageChange: any, isDisabled?: boolean }) => {

    return (
        <li className={`
                page-item 
                ${page === currentPage ? "active" : ''} 
                ${isDisabled ? 'disabled' : ''}
            `}
            onClick={() => onPageChange(page)}
        >

            <span className="page-link">{page}</span>
        </li>
    );
};

const Pagination = ({ currentPage, total, limit, onPageChange }:
    { currentPage: number, total: number, limit: number, onPageChange: any }) => {

    const pagesCount = Math.ceil(total / limit);

    const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
    const pages = range(pagesCut.start, pagesCut.end);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === pagesCount;

    return (
        <ul className="pagination">
            <PaginationItem
                page="First"
                currentPage={currentPage}
                onPageChange={() => onPageChange(1)}
                isDisabled={isFirstPage}
            />
            <PaginationItem
                page="Prev"
                currentPage={currentPage}
                onPageChange={() => onPageChange(currentPage - 1)}
                isDisabled={isFirstPage}
            />
            {pages.map((page) => (
                <PaginationItem
                    page={page}
                    key={page}
                    currentPage={currentPage}
                    onPageChange={onPageChange}
                />
            ))}
            {
                !pages.includes(pagesCount) &&
                <PaginationItem
                page="..."
                currentPage={currentPage}
                onPageChange={() => {}}
            />
            }
            <PaginationItem
                page="Next"
                currentPage={currentPage}
                onPageChange={() => onPageChange(currentPage + 1)}
                isDisabled={isLastPage}
            />
            <PaginationItem
                page="Last"
                currentPage={currentPage}
                onPageChange={() => onPageChange(pagesCount)}
                isDisabled={isLastPage}
            />
        </ul>
    )

}

export default Pagination;