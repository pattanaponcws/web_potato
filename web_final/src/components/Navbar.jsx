import { CgMenu, CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { HiUser } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import axios from "axios";

const Navbar = (props) => {
  const paths = [
    { key: 1, name: "Home", path: "/" },
    { key: 2, name: "Orders", path: "/restaurant" },
    { key: 3, name: "Post", path: "/Post" },
  ];

  let [open, setOpen] = useState(false);
  let [drop, setDrop] = useState(false);

  const [cart, setCart] = useState([]);
  const [res, setRes] = useState([]);
  let num = 0;

  let [onTop, setOntop] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY == 0) {
      setOntop(true);
    } else {
      setOntop(false);
    }
    console.log(onTop);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 769) {
      setOpen(false);
    }
  });

  const getData = () => {
    axios({
      method: "get",
      url: "https://localhost:7057/api/GetCart",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setCart(response.data);
        //console.log(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios({
      method: "get",
      url: "https://localhost:7057/api/restaurants",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        setRes(response.data);
        //console.log(response.data);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Count = () => {
    //console.log(res)
    //console.log(cart)
    res.forEach((r) => {
      for (let c = 0; c < cart.length; c++) {
        //console.log(cart[c])
        if (r.restId == cart[c].menu.restaurants.restId) {
          num++;
          break;
        }
      }
    });
  };
  useEffect(() => {
    getData();
  }, [props.reload[0]]);
  Count();
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 md:bg-light ${
        open
          ? " shadow-2xl transition duration-1000 ease-in-out bg-white bg-opacity-90 pb-72 "
          : " transition bg-light duration-1000 pb-72"
      }${drop ? "pb-96" : null}`}
    >
      <div
        className={` md:flex pb-16  items-center justify-between md:px-[6rem] px-[3rem] relative -translate-y-14 transition duration-1000 hover:translate-y-3 ${
          onTop ? " translate-y-3" : null
        } `}
        onMouseOut={() => {
          setTimeout(() => {
            setDrop(false);
          }, 3000);
        }}
      >
        <a href="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center  text-orange-600">
            🥔 Potato
          </div>
        </a>
        <div
          className="text-orange-600 absolute right-8 top-0 text-3xl cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {!open && <CgMenu></CgMenu>}
          {open && <CgClose></CgClose>}
        </div>
        <ul
          className={` md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] left-0 w-full
            md:w-auto md:pl-0 pl-12 md:bg-transparent md:bg-ligh transition-all ease-in duration-500  ${
              open ? "top-10 opacity-100" : "top-[-490px]"
            }`}
        >
          {paths.map((path) => (
            <li key={path.key} className="md:ml-7 md:my-0 my-7">
              <a
                href={path.path}
                className={`text-orange-600 hover:text-orange-700 text-xl font-bold duration-1000 ${
                  open
                    ? "ml-1 transition transform duration-200 translate-x-15 delay-1000"
                    : ""
                }`}
              >
                {path.name}
              </a>
            </li>
          ))}
          <li className="md:ml-7 md:my-0">
            <a href="\Cart">
              <button className=" relative font-bold rounded-full bg-orange-600 text-xl text-white px-5 py-2  hover:bg-orange-700 duration-500">
                <HiShoppingCart />
                <span className="absolute w-[20px] h-[20px] bg-red-600 rounded-full flex justify-center items-center md:-top-1 md:right-[1px] bottom-5 right-[1px] md:z-0 z-10">
                  <p className="m-1 font-bold text-[0.7rem]">{num}</p>
                </span>
              </button>
            </a>
          </li>
          <li className="md:ml-7 md:my-0 my-7 relative">
            <a onClick={() => setDrop(!drop)}>
              <button className="font-bold bg-orange-600 text-xl text-white px-5 py-2 rounded-full hover:bg-orange-700 duration-500">
                <HiUser />
              </button>
            </a>
            {drop == true ? (
              <div className={` md:absolute md:bg-white rounded-md p-2 mt-2`}>
                <ul className=" space-y-2 lg:w-20">
                  <li>
                    <a
                      href="/Login"
                      className="flex p-2 font-medium text-gray-500 rounded-md  hover:bg-gray-100 hover:text-black"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                      className="flex p-2 font-medium text-gray-500 rounded-md  hover:bg-gray-100 hover:text-black"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
