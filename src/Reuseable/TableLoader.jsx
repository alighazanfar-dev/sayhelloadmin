import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableLoader = () => {
  return (
    <>
      <table className="table table-striped mb-0">
        <thead>
          <tr>
            <th width="1%">
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
            <th>
              <Skeleton />{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <th>
                <Skeleton />
              </th>
              <th scope="row">
                <Skeleton />
              </th>
              <td>
                <Skeleton />
              </td>

              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />{" "}
              </td>
              <td>
                <Skeleton />
              </td>
              <td>
                <Skeleton />
              </td>
            </tr>
          </>
        </tbody>
      </table>
    </>
  );
};

export default TableLoader;
