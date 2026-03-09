import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

 function Register() {

   const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const fullname = e.target.fullname.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
      { fullname, 
        email, 
        password 
    },{
      withCredentials:true
    });

    alert("Registered successfully ✅");
    navigate('/login');
    e.target.reset();
  } catch (error) {
    alert("Registration failed ❌");
    e.target.reset();
  }

  
};


  return (
    <div className="min-h-screen bg-[#f8f1f1] flex items-start justify-center px-5 py-30">
      <div className="w-full max-w-130">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaHeart className="text-[#981b34]  text-3xl" />
            <h1
              className="text-[34px] font-semibold text-[#2f211d]"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              ShaadiBio
            </h1>
          </div>
          <p className="text-[#8e7d73] text-[18px]">Create beautiful marriage biodata</p>
        </div>

        <div className="bg-white border border-[#ddd4cc] rounded-2xl shadow-sm px-8 py-9">
          <h2
            className="text-center text-[26px] font-semibold text-[#2f211d] mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[16px] font-medium text-[#352a25] mb-2">Full Name</label>
              <input
                type="text"
                name='fullname'
                placeholder="Your full name"
                className="w-full h-12 rounded-xl border border-[#e2d8cf] px-4 text-[16px] text-[#3b2d28] placeholder:text-[#9d8f86] outline-none focus:ring-2 focus:ring-[#9d1737]/20 focus:border-[#9d1737]"
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium text-[#352a25] mb-2">Email</label>
              <input
                type="email"
                name='email'
                placeholder="you@example.com"
                className="w-full h-12 rounded-xl border border-[#e2d8cf] px-4 text-[16px] text-[#3b2d28] placeholder:text-[#9d8f86] outline-none focus:ring-2 focus:ring-[#9d1737]/20 focus:border-[#9d1737]"
              />
            </div>

            <div>
              <label className="block text-[16px] font-medium text-[#352a25] mb-2">Password</label>
              <input
                type="password"
                name='password'
                placeholder="••••••••"
                className="w-full h-12 rounded-xl border border-[#e2d8cf] px-4 text-[16px] text-[#3b2d28] placeholder:text-[#9d8f86] outline-none focus:ring-2 focus:ring-[#9d1737]/20 focus:border-[#9d1737]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#a41536] text-white font-semibold text-[17px] hover:opacity-95 transition mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-[16px] text-[#8e7d73] mt-7">
            Already have an account?{' '}
            <a href="/login" className="text-[#a41536] font-medium hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}


export default Register