
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { isLogginSuccess } from '../../redux/action/auth';

import './login.css';

export const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
	const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !password) return;
        dispatch(isLogginSuccess({name, email, password}));
        navigate('/home');
    }

	return(
        <div className="login-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3" style={{marginTop: '10%'}}>
                    <div className="shadow rounded">
                        <div className="row m-0 align-items-stretch">
                            <div className="col-md-4 p-0 rounded-start login-form-left">
                                <div className="h-100 text-white text-center d-flex flex-column justify-content-center align-items-center">
                                    {/* <i className="fa fa-shopping-cart"></i> */}
                                    <img src="https://www.seekpng.com/png/full/247-2474955_ecommerce-ecommerce-png.png" alt="title" height="100px" width="100px" />
                                    <h3>Application Login</h3>
                                </div>
                            </div>
                            <div className="col-md-8 p-0" style={{background: '#fff'}}>
                                <div className="m-3 card-title text-center border-bottom">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhoF76o9Tz2M1UynYnEl8203DGbK_isGM4A&usqp=CAU" 
                                    alt="title" height="50px" width="50px" />
                                </div>
                                <div className="form-left py-2 px-5">
                                    <form action="" className="row g-4">
                                            <div className="col-12">
                                                <label htmlFor="name">Name</label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="fa fa-user"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter Username" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="name">Email</label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="fa fa-envelope"></i></div>
                                                    <input type="text" className="form-control" placeholder="Enter User email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="name">Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-text"><i className="fa fa-lock"></i></div>
                                                    <input className="form-control" type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="btn btn-outline-dark px-4 float-end mt-4" onClick={handleSubmit}>login</button>
                                            </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
	)
}