import React, { useEffect, useState } from 'react'
import * as StudentServices from '../../../../Services/StudentServices';
import { Link } from "react-router-dom"
function ListStudent() {
    const [apiData, setAPIData] = useState([]);
    const [check, setCheck] = useState(false);
    
    const deleteDataAPI = (id) => {
        StudentServices.remove(id);
        setCheck(true);
    };

    useEffect(() => {
        const getDataApi = async ()=>{
            const data = await StudentServices.all();
            setAPIData(data);
        }
        getDataApi();
    }, [check]);

    return (
        <>
            <div className='container-fluid p-4'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Birthday</th>
                            <th>Gender</th>
                            <th>Avatar</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData && apiData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item['id']}</td>
                                        <td>{item['name']}</td>
                                        <td>{item['birthday']}</td>
                                        <td>{item['gender'] === 0 ? "Female" : "Male"}</td>
                                        <td className='w-25'>
                                            <img src={item['avatar']} alt='' className='card-img'/>
                                        </td>
                                        <td>
                                            <Link to={`/student/edit/${item['id']}`} className="btn btn-outline-warning rounded-0">Update</Link>
                                            <button onClick={() => deleteDataAPI(item['id'])} className="btn btn-outline-danger rounded-0">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListStudent