import Main from "../components/Main";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getErrorObject} from "../utils/getErrorObject";
import {userKeys, user} from "../models/user";
import {validate} from "../utils/validate";
import axios from "axios";
import swal from "sweetalert";

export function RegisterPage(){


    const [ data , setData ] = useState(user);// data is for registration data
    const [ error , setError ] = useState(() => {
        return getErrorObject(userKeys);
    });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const savedUser = await axios.get(`http://localhost:3000/users?email=${data.email}`);
        if( savedUser.data.length > 0 ){
            setError( prevError => {
                return { ...prevError , email : { hasError : true , msg : 'Email must be unique!'}}
            })
        }else{
            data.password = window.btoa(window.btoa(data.password));
            const res = await axios.post('http://localhost:3000/users' , data );

            if( res.data ){
                swal({
                    text: 'Successfully Registered1',
                    icon: 'success'
                }).then( () => {
                    navigate('/signin?msg=Successfully Registered!');
                });
            }else{
                let err = { hasError : true , msg : 'Something went wrong!'};
                setError( prevError => {
                    return { name : err , email : err , password : err };
                });
            }
        }

    }

    return (
        <Main>
            <form onSubmit={handleRegister} className='form w-25'>
                <div className='form-group my-2'>
                    <label className='form-label text-primary'>Username</label>
                    <input
                        onChange={ e => setData( prevData => {
                            return { ...prevData , name : e.target.value }
                        })}
                        type='text' className='form-control fw-bold text-dark' placeholder='Enter username'
                        required
                    />
                    <span id='error'>{ error.name.hasError && error.name.msg}</span>
                </div>
                <div className='form-group my-2'>
                    <label className='form-label text-primary'>Email Address</label>
                    <input
                        onChange={ e => setData( prevData => {
                            return { ...prevData , email : e.target.value };
                        }) }
                        type='email' className='form-control fw-bold text-dark' placeholder='Enter email address'
                        required
                    />
                    <span id='error'>{ error.email.hasError && error.email.msg}</span>
                </div>
                <div className='form-group my-2'>
                    <label className='form-label text-primary'>Password</label>
                    <input
                        onChange={ e => setData( prevData => {
                            return { ...prevData , password : e.target.value }
                        })}
                        type='password' className='form-control fw-bold text-dark' placeholder='Enter password'
                        required
                    />
                    <span id='error'>{ error.password.hasError && error.password.msg}</span>
                </div>
                <div className='form-group my-2 text-center'>
                    <button className='btn btn-primary w-100'>Register</button>
                    <Link to='/signin' className='my-2 text-danger' >Already had?</Link>
                </div>
            </form>
        </Main>
    )
}