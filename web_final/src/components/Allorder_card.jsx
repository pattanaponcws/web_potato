import React from "react";

function Allorder_card() {
  return (
    <div className="w-screen bg-base  min-h-screen bg-repeat-y bg-cover pb-20">
        <div className=" pt-24 font-bold text-xl md:text-2xl lg:text-3xl flex justify-center">
        All Order
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 pt-10 ">
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
      
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
      
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
      
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="group h-72 w-full [perspective:1000px] lg:px-10">
          <div className=" relative bg-amber-200 w-full h-72 rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className=" absolute inset-0 ">
              {/* front card */}
              <img
                className="h-40 w-full rounded-xl object-cover  shadow-black/40"
                src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
              />
                <h2 className="text-center text-lg sm:text-xl pt-2 ">restaurant</h2>
                <div className="mt-2 border-b-2 border-amber-500 border-dashed">

                </div>
                <ul className="text-center px-4 py-2 mx-4">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Name :</div>
                    </div>
                    <div className="text-base sm:text-lg">เจ๊ส้มส้ม</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>Delivery To :</div>
                    </div>
                    <div className="text-base sm:text-lg">ECC</div>
                  </li>
                </ul>
            
            </div>

            {/* back card */}
            <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <h1>Resturant</h1>
                <ul className="text-center px-4 py-2">
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>
                  <li className="flex justify-between items-center gap-x-3">
                    <div className="flex justify-between gap-x-2 text-base sm:text-lg ">
                      <div>2 X</div>
                      <div>ไก่ชีส</div>
                    </div>
                    <div className="text-base sm:text-lg">70 $</div>
                  </li>

                  {/* accept */}
                  <button className="mt-2 rounded-md bg-orange-400 py-1 px-2 text-sm hover:bg-orange-600">
                    Accept
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        
      
      
      </div>
    </div>
  );
}

export default Allorder_card;
