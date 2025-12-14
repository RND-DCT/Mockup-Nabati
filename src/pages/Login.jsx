import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import nabatiLogo from '../assets/nabati-logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex">
            {/* Left Side - Welcome Section */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 text-white flex-col justify-center p-12 overflow-hidden gap-10">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/80 mix-blend-multiply"></div>
                    {/* Grid overlay effect */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center h-full max-w-lg mx-auto py-10">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-2 tracking-tight">Welcome Back</h1>
                        <p className="text-xl text-gray-300 font-light">to the People Movement Management System</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 w-full">
                        <div className="flex items-center gap-3 mb-2 text-gray-200">
                            <div className="p-1.5 bg-white/10 rounded-lg">
                                <Lock className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-sm tracking-wide uppercase text-gray-400">Secure Access</span>
                        </div>
                        <p className="text-lg font-medium">Enterprise-grade security for your data</p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500 rounded-full"></div>
                        <p className="pl-6 text-gray-300 italic leading-relaxed text-sm">
                            "We are committed to providing a safe, comfortable, and professional visiting experience for every visitor with the support of technology."
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-white overflow-hidden">

                {/* Background Blobs - Adjusted for the right side container */}
                <div className="absolute top-[-35vh] right-[-35vh] w-[80vh] h-[80vh] bg-[#D0F4F9] rounded-full z-0"></div>
                <div className="absolute bottom-[-35vh] left-[-35vh] w-[70vh] h-[70vh] bg-[#FCE5F3] rounded-full z-0"></div>
                {/* Small blob moved left by approx 10px */}
                <div className="absolute top-[-64px] left-[calc(52%-10px)] w-32 h-32 bg-[#FCE5F3] rounded-full z-0"></div>

                <div className="w-full max-w-sm z-10 flex flex-col items-center gap-4 p-4 lg:p-0">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-xl w-full p-8 flex flex-col items-center border border-gray-100/50">
                        {/* Logo Nabati - from asset */}
                        <div className="mb-6">
                            <div className="w-32 h-auto relative flex items-center justify-center">
                                <img src={nabatiLogo} alt="Nabati Logo" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-6 self-start w-full text-center">Sign in to your account</h2>


                        <form className="w-full flex flex-col gap-4">
                            {/* Username */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-600 block">Username</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-4 w-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all bg-gray-50/50 hover:bg-white"
                                        placeholder="Enter your username"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-600 block">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-4 w-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="block w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-50 transition-all bg-gray-50/50 hover:bg-white"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="button"
                                onClick={() => navigate('/dashboard')}
                                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#FCE7F3] hover:bg-[#FBCFE8] text-pink-700 font-semibold py-2.5 rounded-lg transition-colors group"
                            >
                                Sign In
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="relative flex py-1 items-center">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink-0 mx-3 text-xs text-gray-400">Or continue with</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                            </div>

                            {/* MS Entra Button */}
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 bg-[#FCE7F3] hover:bg-[#FBCFE8] text-pink-700 font-semibold py-2.5 rounded-lg transition-colors"
                            >
                                Sign In MS Entra
                                <div className="rotate-45 grid grid-cols-2 gap-[1px]">
                                    <div className="w-1.5 h-1.5 bg-[#F25022]"></div>
                                    <div className="w-1.5 h-1.5 bg-[#7FBA00]"></div>
                                    <div className="w-1.5 h-1.5 bg-[#00A4EF]"></div>
                                    <div className="w-1.5 h-1.5 bg-[#FFB900]"></div>
                                </div>
                            </button>

                        </form>
                    </div>

                    {/* Visitor Portal Button */}
                    <button className="w-full bg-[#FCE7F3] hover:bg-[#FBCFE8] text-pink-700 font-semibold py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                        Visitor Portal
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-door-open"><path d="M13 4h3a2 2 0 0 1 2 2v14" /><path d="M2 20h3" /><path d="M13 20h9" /><path d="M10 12v.01" /><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1.11A2 2 0 0 1 13 4.561Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
