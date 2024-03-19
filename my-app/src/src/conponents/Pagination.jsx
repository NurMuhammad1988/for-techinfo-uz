import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageaSize }) => {
    const totalPages = Math.ceil(blogs.length / pageaSize);
    // console.log(totalPages);// shu totalPages cod sabab asosiy sahifaga serverdan faqat 12 ta malumot chaqirildi
    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
                <li
                    key={pageNumber}
                    className={
                        pageNumber === currentPage ? "activerPagination" : ""
                    }
                >
                    <a onClick={() => onPageChange(pageNumber)} href="#">
                        {pageNumber}
                    </a>
                </li>
            )
        );
    };
    return (
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
            </li>
            <div className="flex gap-1 flex-wrap"> {renderPaginationLinks()} </div>
            <li>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
