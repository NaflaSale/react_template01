import React from 'react';


export default function LoginComponents(){
  return (
      <div className='w-3/4 h-80 bg-white-700 rounded-md shadow-lg pt-20 '>
          <div className=" py-8 px-8  max-w-l   bg-white rounded-xl  "
          >
              <h1 className='p-2 text-3xl text-center text-slate-400 '>تسجيل الدخول  </h1>
              <br></br>
              <label className='pr-2 '>البريد الالكتروني</label>
              <br></br>
              <br></br>
              <input className="pr-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9  shadow-sm focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 sm:text-sm" placeholder="  البريد الالكتروني " type="email" />
              <br></br>
              <label className='pr-2'> كلمة المرور </label>
              <br></br>
              <br></br>
              <input className="pr-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9  shadow-sm focus:outline-none focus:border-slate-400 focus:ring-slate-400 focus:ring-1 sm:text-sm" placeholder="  كلمة المرور  " type="email" />
              <br></br><br></br>
              <div className='py-9 flex justify-between  items-center'>
                  <button> <u>هل نسيت كلمة المرور </u></button>
                 
                 <div> <span><input id='checkbox' type='checkbox' /></span>
                  <label className='pr-2' >تذكرني   </label>
              </div></div>
              <br></br>
            
          </div></div>
  )
}