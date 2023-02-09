import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as StudentServices from "../../../../Services/StudentServices";
import { format, parseISO } from 'date-fns'
function UpdateStudent() {

    const initState = {
        name: "",
        birthday: "",
        gender: "",
        avatar: ""
    };

    const [preview, setPreview] = useState();
    const [student, setStudent] = useState(initState);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getDataApi = async () => {
            const data = await StudentServices.getByID(id);
            setStudent(data[0]);
        }
        getDataApi();
    }, [id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const changeFile = (e) => {
        setPreview(e.target.files[0]);
    }



    const handleSubmit = () => {
        var data = new FormData();
        data.append("name", student.name);
        data.append("birthday", student.birthday);
        data.append("gender", student.gender);
        data.append("avatar", preview);
        StudentServices.update(id, data);
        navigate('/student/list');
    };

    return (
        <div className='container p-4'>
            <form id='form'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" defaultValue={student.name} onChange={handleInputChange} id="" className="form-control rounded-0" placeholder="Name" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <label htmlFor="">BirthDay</label>
                            <input type="date" name="birthday" onChange={handleInputChange} id="" className="form-control rounded-0" placeholder="Name" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <select className="form-control rounded-0 custom-select" onChange={handleInputChange} name="gender" id="">
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="form-group">
                            <label htmlFor="">Avatar</label>
                            <input type="file" name="avatar" onChange={changeFile} id="" className='form-control rounded-0' />
                        </div>
                        <div className='w-25'>
                            {preview ? <img src={URL.createObjectURL(preview)} alt='' className='card-img' /> : <img src={student.avatar} alt='' className='card-img' />}
                        </div>
                    </div>
                </div>

                <button type="button" onClick={handleSubmit} className="btn btn-outline-success btn-block rounded-0">Submit</button>
            </form>
        </div>
    )
}

export default UpdateStudent;