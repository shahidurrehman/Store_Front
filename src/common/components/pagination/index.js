import React, { useState, useEffect } from "react";
import IconChevronLeft from "../../../assets/icons/chevron-left";
import IconChevronRight from "../../../assets/icons/chevron-right";


const Pagination = ({ data, changePage }) => {
  let { pageNo, total, pageSize } = data;
  const numberOfPages = Math.ceil(total / pageSize);

  const [state, setstate] = useState({
    hasFifthPrev: false,
    hasFourthPrev: false,
    hasThirdPrev: false,
    hasPrevToPrev: false,
    hasPrev: false,

    hasNext: false,
    hasNextToNext: false,
    hasThirdNext: false,
    hasFourthNext: false,
    hasFifthNext: false,
  });

  const loadPagination = () => {
    if (pageNo === undefined) {
      pageNo = "NO DATA";
    }

    if (pageNo === 1) {
      setstate({
        hasFifthPrev: false,
        hasFourthPrev: false,
        hasThirdPrev: false,
        hasPrevToPrev: false,
        hasPrev: false,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });

    } else if (pageNo === 2) {

      setstate({
        hasFifthPrev: false,
        hasFourthPrev: false,
        hasThirdPrev: false,
        hasPrevToPrev: false,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });

    } else if (pageNo === 3) {

      setstate({
        hasFifthPrev: false,
        hasFourthPrev: false,
        hasThirdPrev: false,
        hasPrevToPrev: true,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });
    } else if (pageNo === 4) {

      setstate({
        hasFifthPrev: false,
        hasFourthPrev: false,
        hasThirdPrev: true,
        hasPrevToPrev: true,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });
    } else if (pageNo === 5) {

      setstate({
        hasFifthPrev: false,
        hasFourthPrev: true,
        hasThirdPrev: true,
        hasPrevToPrev: true,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });
    } else if (pageNo === 6) {

      setstate({
        hasFifthPrev: true,
        hasFourthPrev: true,
        hasThirdPrev: true,
        hasPrevToPrev: true,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });
    } else if (pageNo > 6) {

      setstate({
        hasFifthPrev: true,
        hasFourthPrev: true,
        hasThirdPrev: true,
        hasPrevToPrev: true,
        hasPrev: true,
        // CURRENT PAGE HERE
        hasNext: (numberOfPages > pageNo),
        hasNextToNext: (numberOfPages > pageNo + 1),
        hasThirdNext: (numberOfPages > pageNo + 3),
        hasFourthNext: (numberOfPages > pageNo + 4),
        hasFifthNext: (numberOfPages > pageNo + 5),
      });
    }
  };

  useEffect(() => {
    loadPagination();
  }, [data]);

  return (
    <>
      <ul className="pagination m-0 ms-auto">
        <li className={`page-item${pageNo <= 1 ? " disabled" : ""}`}>
          <button className="page-link" href="#" onClick={(e) => changePage(e, 1)}>
            First
          </button>
        </li>

        <li className={`page-item${pageNo <= 1 ? " disabled" : ""}`}>
          <button className="page-link" href="#" onClick={(e) => changePage(e, pageNo - 1)}>
            <IconChevronLeft />
            Prev
          </button>
        </li>

        {/* {state.hasFifthPrev && (
          <li className={`page-item `}>
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo - 5)}
              href="#"
            >
              {pageNo - 5}
            </button>
          </li>
        )} */}

        {state.hasFourthPrev && (
          <li className={`page-item `}>
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo - 4)}
              href="#"
            >
              {pageNo - 4}
            </button>
          </li>
        )}

        {state.hasThirdPrev && (
          <li className={`page-item `}>
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo - 3)}
              href="#"
            >
              {pageNo - 3}
            </button>
          </li>
        )}

        {state.hasPrevToPrev && (
          <li className={`page-item `}>
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo - 2)}
              href="#"
            >
              {pageNo - 2}
            </button>
          </li>
        )}

        {state.hasPrev && (
          <li className={`page-item `}>
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo - 1)}
              href="#"
            >
              {pageNo - 1}
            </button>
          </li>
        )}
        {/* <li className="page-item active">
          <div className="page-link">{pageNo}</div>
        </li> */}
        {pageNo && pageNo ? (<li className="page-item active">
          <div className="page-link">{pageNo}</div>
        </li>) : ("")}

        {state.hasNext && (
          <li className="page-item ">
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo + 1)}
            >
              {pageNo + 1}
            </button>
          </li>
        )}

        {state.hasNextToNext && (
          <li className="page-item ">
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo + 2)}
              href="#"
            >
              {pageNo + 2}
            </button>
          </li>
        )}

        {state.hasThirdNext && (
          <li className="page-item ">
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo + 3)}
              href="#"
            >
              {pageNo + 3}
            </button>
          </li>
        )}

        {state.hasFourthNext && (
          <li className="page-item ">
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo + 4)}
              href="#"
            >
              {pageNo + 4}
            </button>
          </li>
        )}

        {/* {state.hasFifthNext && (
          <li className="page-item ">
            <button
              className="page-link"
              onClick={(e) => changePage(e, pageNo + 5)}
              href="#"
            >
              {pageNo + 5}
            </button>
          </li>
        )} */}

        <li className={`page-item${pageNo >= numberOfPages ? " disabled" : ""}`}>
          <button className="page-link" href="#" onClick={(e) => changePage(e, pageNo + 1)}>
            Next
            <IconChevronRight />
          </button>
        </li>

        <li className={`page-item${pageNo >= numberOfPages ? " disabled" : ""}`}>
          <button className="page-link" href="#" onClick={(e) => changePage(e, numberOfPages)}>
            Last
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
