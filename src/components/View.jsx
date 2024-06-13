import React, { useEffect, useState } from 'react'
import axios from 'axios';

const View = () => {
    return (
        <div>
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
                                        <tr>
                                            <td>Dance</td>
                                            <td>2-July-24</td>
                                            <td>High</td>
                                            <td>dsfvds</td>
                                        </tr>                                    
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