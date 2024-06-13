import React, { useState } from 'react'
import axios from 'axios'
import Nav from './Nav'

const Add = () => {
    const [task, changeData] = useState(
        {
            "tname": "",
            "date": "",
            "priority": "",
            "tdesc": ""
        }
    )
    const eventHandler = (event) => {
        changeData({ ...task, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(task)
        axios.post("http://localhost:8235/add", task).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        )
    }
    return (
        <div>
            <Nav/>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Tasks</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Task Name :</label>
                                        <input type="text" className="form-control" name='tname' value={task.tname} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date :</label>
                                        <input type="text" className="form-control" name='date' value={task.date} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Priority :</label>
                                        <select id="" className="form-control" name='priority' value={task.priority} onChange={eventHandler} >
                                            <option value=""></option>
                                            <option value="High">High</option>
                                            <option value="High">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description :</label>
                                        <textarea id="" className="form-control" name='tdesc' value={task.tdesc} onChange={eventHandler} ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add