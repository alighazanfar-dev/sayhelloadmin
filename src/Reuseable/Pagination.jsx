import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  const lastPage = pages.slice(-1)[0];

  const handleAdd = (e) => {
    const add = currentPage + 1;
    onPageChange(e, add);
  };
  const handleSuntract = (e) => {
    const subtract = currentPage - 1;
    onPageChange(e, subtract);
  };

  return (
    <>
      <nav aria-label="...">
        <ul className="pagination">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <Link
              disabled={currentPage === 1}
              className="page-link"
              to="#"
              onClick={(e) => handleSuntract(e)}
            >
              Previous
            </Link>
          </li>
          {/* {pages.map((page, index) => (
            <li
              key={index}
              onClick={(e) => onPageChange(e, page)}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <Link className="page-link" to="#">
                {page}
              </Link>
            </li>
          ))} */}

          <li className={"page-item"}>
            <Link className="page-link" to="#">
              {currentPage}
            </Link>
          </li>

          <li
            className={
              currentPage === lastPage ? "page-item disabled" : "page-item"
            }
          >
            <Link
              disabled={currentPage === lastPage}
              className="page-link"
              to="#"
              onClick={(e) => handleAdd(e)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
