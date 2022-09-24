import Main from "../components/Main";
import {Link} from "react-router-dom";

export function RegisterPage(){
    return (
        <Main>
            <form className='form w-25'>
                <div className='form-group my-3'>
                    <label className='form-label text-primary'>Username</label>
                    <input type='text' className='form-control' placeholder='Enter username'/>
                </div>
                <div className='form-group my-3'>
                    <label className='form-label text-primary'>Email Address</label>
                    <input type='text' className='form-control' placeholder='Enter email address'/>
                </div>
                <div className='form-group my-3'>
                    <label className='form-label text-primary'>Password</label>
                    <input type='text' className='form-control' placeholder='Enter password'/>
                </div>
                <div className='form-group my-3 text-center'>
                    <button className='btn btn-primary w-100'>Register</button>
                    <Link to='/signin' className='my-2 text-danger' >Already had?</Link>
                </div>
            </form>
        </Main>
    )
}