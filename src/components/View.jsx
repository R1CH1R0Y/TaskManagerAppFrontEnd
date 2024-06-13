import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from './Nav';

const View = () => {
    const [task, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8235/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Nav/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Task List</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">TASK NAME:</th>
                                            <th scope="col">DATE</th>
                                            <th scope="col">PRIORITY</th>
                                            <th scope="col">DESCRIPTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {task.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td>{value.tname}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.priority}</td>
                                                    <td>{value.tdesc}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View