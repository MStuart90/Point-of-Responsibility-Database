import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

const ResultsTable = (props) => {
  let someCase = props.someCase;

  if (someCase) {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  } else if (someCase === undefined) {
    return <div>
      <Link to="Contribute"><p>Contribute To Our Database</p></Link>
    </div>;
  } else {
    return <div>
      <h3>We Don't Have That Yet</h3>
      <Link to="Contribute"><p>Contribute To Our Database</p></Link>
    </div>;
  }
};

export default ResultsTable;