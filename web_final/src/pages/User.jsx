import React from 'react'

const User = () => {
    // const pwShow = document,querySelector(".show"),createPW = document,querySelector("#password"),confirmPW = document,querySelector("#confirm-password")
    // pwShow.addEventListener("click",()=>{})
    return (
        <div className="w-screen h-screen bg-cover flex justify-around bg-[url('https://sv1.picz.in.th/images/2023/04/27/ycNIzv.png')]" >

            <div className='pt-[150px]'>
                <div className='text-center'>
                    <button className="font-bold rounded-lg bg-orange-600 text-[30px] text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center ">Account Setting</button>
                </div>

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="first-name" />
                Username :
                <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="display-name" />
                Display Name :
                <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />

                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="email" />
                Email :
                <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="" />



                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="confirm-password" />
                Address:
                <textarea class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" id="confirm" type="text" placeholder="" cols="30" rows="6" />

            </div>
            <div className='pt-[150px]'>
                <div>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="phone-number" />
                    Phone Number :
                    <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="" />


                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-5" for="password" />
                    Password :
                    <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="" />
                    <div className='pt-10'>
                        <button className="font-bold rounded-lg bg-orange-600 text-[20px] text-white px-5 py-2  hover:bg-orange-700 duration-500 text-center ">Save</button>
                    </div>
                </div>
                <img src="https://sv1.picz.in.th/images/2023/04/27/ycBBa2.png" className=' h-[250px] w-[430px] translate-x-[150px] translate-y-[50px]' alt="" />
            </div>
            
        </div>

    )
}

export default User