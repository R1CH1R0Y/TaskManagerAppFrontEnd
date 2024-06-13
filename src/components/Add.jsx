import React, { useState } from 'react'
import axios from 'axios'

const Add = () => {
    return (
        <div>
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
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date :</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Priority :</label>
                                        <select id="" className="form-control" >
                                            <option value=""></option>
                                            <option value="High">High</option>
                                            <option value="High">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Description :</label>
                                        <textarea id="" className="form-control" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" >Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add