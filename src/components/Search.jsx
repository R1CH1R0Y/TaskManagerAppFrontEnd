import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const Search = () => {
    const [task, changeData] = useState(
        {
            "tname": ""
        }
    )
    const [result, setData] = useState([])
    const eventHandler = (event) => {
        changeData({ ...task, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(task)
        axios.post("http://localhost:8235/search", task).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        )
    }
    const deletetask = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8235/remove", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("successfully deleted")
                } else {
                    alert("error in deletion")
                }
            }
        ).catch()
    }
    return (
        <div>
            <Nav/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Search Task</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Task Name :</label>
                                <input type="text" className="form-control" name='tname' value={task.tname} onChange={eventHandler} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Search</button>
                    <br />
                    <br />
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
                            {result.map(
                                (value, index) => {
                                    return <tr>
                                        <td>{value.tname}</td>
                                        <td>{value.date}</td>
                                        <td>{value.priority}</td>
                                        <td>{value.tdesc}</td>
                                        <td><button className="btn btn-danger" onClick={() => { deletetask(value._id) }}>Delete</button></td>
                                    </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search