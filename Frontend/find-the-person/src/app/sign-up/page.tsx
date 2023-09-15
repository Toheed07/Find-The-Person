'use client'
import React, { useState } from 'react'
import axios from 'axios';
import * as Constant from '@/utils/constants';
import { useRouter } from 'next/navigation';

const Register = () => {
    const router = useRouter();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)

        axios.post(Constant.api + '/user/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if(response.status == 200){
                router.push("/sign-in")
            }
                console.log(response);
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
                                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            // style={{"background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"}}
                            ></div>
                            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="pt-4 text-2xl text-center text-gray-700">Create an Account!</h3>
                                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="space-y-4 mb-4  md:justify-center">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label className="block mb-2 text-sm font-bold text-gray-700" >
                                                Username
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="username"
                                                type="text"
                                                placeholder="Username"
                                                onChange={handleChange}
                                                name='username'
                                            />
                                        </div>
                                        <div className="mb-4 md:mr-2 md:mb-0">
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
                                        <div className="mb-4 md:mr-2 md:mb-0">
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
                                        </div>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="#"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="text-center">
                                        <a
                                            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                            href="sign-in"
                                        >
                                            Already have an account? Login!
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

export default Register;