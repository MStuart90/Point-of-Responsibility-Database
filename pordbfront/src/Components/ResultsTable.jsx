import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

const ResultsTable = (props) => {
    const { results } = props;
    console.log(results);

    function renderRows() {
        return results.map((row) => {
            return (
                <tr>
                    <td>{row.companyName}</td>
                    <td>{row.date}</td>
                    <td>
                        <a
                            href={row.termsOfServiceIpPolicy}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {row.link}
                        </a>
                    </td>
                    <td>
                        <a
                            href={row.termsOfServiceIpPolicy}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {row.termsOfServiceIpPolicy}
                        </a>
                    </td>
                    <td>{row.comments}</td>
                </tr>
            );
        });
    }

    if (results.length) {
        return (
            <Table>
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '10%' }}>Date Added</th>
                        <th style={{ width: '20%' }}>How To Report</th>
                        <th style={{ width: '20%' }}>TOS/Policy</th>
                        <th style={{ width: '30%' }}>Comments</th>
                    </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </Table>
        );
    } else {
        return (
            <div>
                <h3>We Don't Have That Yet</h3>
                <Link to='Contribute'>
                    <p>Contribute To Our Database</p>
                </Link>
            </div>
        );
    }
};

export default ResultsTable;
