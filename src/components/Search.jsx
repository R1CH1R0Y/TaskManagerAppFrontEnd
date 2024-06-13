import React, { } from 'react'

const Search = () => {
    return (
        <div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Search Task</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Task Name :</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning">Search</button>
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
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Search