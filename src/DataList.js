import React, { useState, useEffect } from 'react';
import axios from 'axios'
import BootstrapTable from 'react-bootstrap-table-next'
import "bootstrap/dist/css/bootstrap.css"
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
function DataList(props) {
    const [userList, setUserList] = useState([]);
    const columns = [{ dataField: 'id', text: 'Id' },
    { dataField: 'name', text: 'name', sort: true ,filter:textFilter()},
    { dataField: 'username', text: 'username' },
    { dataField: 'email', text: 'email' }
    ]

    const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    });
    useEffect(() => {

        // fetch('https://jsonplaceholder.typicode.com/users').then(res => {

        //     console.log("res", res)
        //     res.json()

        // }).then(result => setUserList(result)).catch(error => {
        //     console.log("error", error)

        // })
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {

            console.log("res", res)
            setUserList(res.data)
        })
    }, [])
    return (
        <div>
            <BootstrapTable bootstrap4 keyField='id'
            columns={columns} data={userList} 
            pagination={pagination}
            filter={filterFactory()}
            ></BootstrapTable>
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>User name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        userList.map((user) => {

                            return (<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>)
                        })
                    }


                </tbody>

            </table> */}

        </div>
    );
}

export default DataList;