'use client'
import React, { useState } from 'react'
import axios from 'axios';
import * as Constant from '@/utils/constants';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e: any) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)
        axios.post(Constant.api + '/user/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if(response.status == 200){
                router.push("/")
            }
                console.log("login Success" + response);
        }).catch(function (error) {
                console.log(error);
        });
    
    }
    return (
        <>
            <div className="font-mono">
                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            // style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"
                            ></div>
                            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-gray-400 text-center">Welcome Back!</h3>
                                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700">
                                            Email
                                        </label>
                                        <input
                                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                          id="email"
                                          type="email"
                                          placeholder="Email"
                                          onChange={handleChange}
                                          name='email'
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" >
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="******************"
                                            onChange={handleChange}
                                            name='password'
                                        />
                                        {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="sign-up"
                                        >
                                            Create an Account!
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
