
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Viewall =()=>{
    let allbasic = useSelector(state =>state.Basiclist);
    return(
        <section className="container">
        <h2 className="text-center text-danger m-4"> View Details </h2>
            <div className="row text-center">
                <div className="col-lg-12">
                    <h3 className="text-success m-4">Task Details : {allbasic.length}</h3>
                    <table className="table table-bordered text-center p-3 mt-2 mb-5">
                        <thead className="bg-info">
                            <tr>
                                <th> Sl No.</th>
                                <th> Name </th>
                                <th> Mobile No. </th>
                                <th> Email Id </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allbasic.map((basic,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{basic.name}</td>
                                            <td>{basic.mobile}</td>
                                            <td>{basic.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Viewall;