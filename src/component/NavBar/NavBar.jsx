// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import cart from "../../assets/cart.png";
// import edit from "../../assets/edit.png";
// import logo from "../../assets/logo.svg";
// import nft from "../../assets/nft.svg";
// import border from "../../assets/white.png";
// import whiteGamepad from "../../assets/whiteGamepad.svg";
// import yellowedit from "../../assets/yellowEdit.png";
// import yellowcart from "../../assets/yellowcart.png";
// import yellowgamepad from "../../assets/yellowgamepad.png";
// import yellownft from "../../assets/yellownft.png";
// import ConnectModal from "../Connect/ConnectModal";

// export const NavBar = () => {
//   const pathname = usePathname();
//   const [showNav, setShowNav] = useState(false);
//   const navRef = useRef(null);
  
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setShowNav(false);
//       }
//     };

//     document.body.addEventListener("click", handleClickOutside);
//     return () => {
//       document.body.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleMobileNavbar = () => {
//     setShowNav(!showNav);
//   };

  
//     const [showModal, setShowModal] = useState(false);


//     const handleConnectClick = () => {
//       setShowModal(true);
//     };
  
//     const handleCloseModal = () => {
//       setShowModal(false);
//     };
   

//   return (
//     <>
//       <nav className="text-[20px] font-normal lg:mx-0 mx-[20px]">
//         <div className="flex  items-center justify-between lg:pt-[30px] pt-[20px]">
//           <Link
//             href="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse">
//             <Image className="h-full w-[50%] lg:w-full" src={logo} alt="Logo" />
//           </Link>
//           <div className="">
//             <button
//               onClick={handleMobileNavbar}
//               ref={navRef}
//               className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-[#FBA116] rounded-lg md:hidden">
//               {showNav === true ? (
//                 "X"
//               ) : (
//                 <svg
//                   className="w-5 h-5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 17 14">
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 1h15M1 7h15M1 13h15"
//                   />
//                 </svg>
//               )}
//             </button>

//             <div
//               className={`w-full md:flex md:w-auto ${
//                 showNav ? "flex" : "hidden"
//               }`}
//               id="navbar-default"
//               ref={navRef}>
//               <ul className="font-medium flex lg:flex-row flex-col justify-center items-center gap-[45px] text-[20px] mobile_navbar sm:pt-[20px] ">
//                 <li>
//                   <Link
//                     href="/"
//                     className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
//                       pathname === "/" ? "text-[#FBA116]" : "text-white"
//                     }`}>
//                     {pathname === "/" ? (
//                       <Image
//                         className="w-[28px] h-[20px]"
//                         src={yellowgamepad}
//                         alt="gamepad"
//                       />
//                     ) : (
//                       <Image
//                         className="w-[28px] h-[20px]"
//                         src={whiteGamepad}
//                         alt="gamepad"
//                       />
//                     )}
//                     Gamezone
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/marketplace"
//                     className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
//                       pathname === "/marketplace"
//                         ? "text-[#FBA116]"
//                         : "text-white"
//                     }`}>
//                     {pathname === "/marketplace" ? (
//                       <Image
//                         className="w-[20px] h-[20px]"
//                         src={yellowcart}
//                         alt="gamepad"
//                       />
//                     ) : (
//                       <Image
//                         className="w-[20px] h-[20px]"
//                         src={cart}
//                         alt="gamepad"
//                       />
//                     )}
//                     Marketplace
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/inscribe"
//                     className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
//                       pathname === "/inscribe" ? "text-[#FBA116]" : "text-white"
//                     }`}>
//                     {pathname === "/inscribe" ? (
//                       <Image
//                         className="w-[20px] h-[20px]"
//                         src={yellowedit}
//                         alt="gamepad"
//                       />
//                     ) : (
//                       <Image
//                         className="w-[20px] h-[20px]"
//                         src={edit}
//                         alt="gamepad"
//                       />
//                     )}
//                     Inscribe
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="/borrow"
//                     className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
//                       pathname === "/borrow" ? "text-[#FBA116]" : "text-white"
//                     }`}>
//                     {pathname === "/borrow" ? (
//                       <Image
//                         className="w-[25px] h-[21px]"
//                         src={yellownft}
//                         alt="gamepad"
//                       />
//                     ) : (
//                       <Image
//                         className="w-[25px] h-[21px]"
//                         src={nft}
//                         alt="gamepad"
//                       />
//                     )}
//                     NFTFI
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     href="#"
//                     className={`flex items-center hover:text-[#FBA116] relative gap-[6px]  text-[#FFA800]`}>
//                     <Image
//                       width={100}
//                       height={28}
//                       className=""
//                       src={border}
//                       alt="gamepad"
//                     />
//                      <div>
//                         <button className="absolute left-[10px] bottom-[-1px] "onClick={handleConnectClick}>
//                           Connect
//                         </button>
//                         {showModal && <ConnectModal onClose={handleCloseModal} />}
//                       </div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
      
//     </>
//   );
// };





// {/* <div>
// <button className="absolute left-[10px] bottom-[-1px] "onClick={handleConnectClick}>
//   Connect
// </button>
// {showModal && <ConnectModal onClose={handleCloseModal} />}
// </div> */}



"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import cart from "../../assets/cart.png";
import edit from "../../assets/edit.png";
import logo from "../../assets/logo.svg";
import nft from "../../assets/nft.svg";
import border from "../../assets/white.png";
import whiteGamepad from "../../assets/whiteGamepad.svg";
import yellowedit from "../../assets/yellowEdit.png";
import yellowcart from "../../assets/yellowcart.png";
import yellowgamepad from "../../assets/yellowgamepad.png";
import yellownft from "../../assets/yellownft.png";
import ConnectModal from "../Connect/ConnectModal";

export const NavBar = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMobileNavbar = () => {
    setShowNav(!showNav);
  };

  
    const [showModal, setShowModal] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [address, setAddress] = useState("");
    const handleConnectClick = () => {
      setShowModal(true);
    };
    const handleConnection = () => {
      setIsConnected(false);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const connectToUnisat = async () => {
      try {
        // Check if Unisat is installed
        if (window.unisat) {
          // Unisat is installed, request access to user accounts
         
           const accounts = await window.unisat.requestAccounts();
           let res = await window.unisat.getAccounts();
          console.log("Connected to Unisat:", accounts);
          console.log(res)
          setIsConnected(true);
          setShowModal(false);
          setAddress(res)
          // Proceed with using accounts
        } else {
          // Unisat is not installed, display a message
          console.log("Unisat is not installed.");
          // Show the message
          setShowMessage(true);
          // Hide the message after 3 seconds
          setTimeout(() => setShowMessage(false), 3000);
        }
      } catch (error) {
        // Handle errors
        console.error("Error connecting to Unisat:", error);
      }
    };
   
  let add= address.toString();

  return (
    <>
      <nav className="text-[20px] font-normal lg:mx-0 mx-[20px]">
        <div className="flex  items-center justify-between lg:pt-[30px] pt-[20px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image className="h-full w-[50%] lg:w-full" src={logo} alt="Logo" />
          </Link>
          <div className="">
            <button
              onClick={handleMobileNavbar}
              ref={navRef}
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-[#FBA116] rounded-lg md:hidden">
              {showNav === true ? (
                "X"
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>

            <div
              className={`w-full md:flex md:w-auto ${
                showNav ? "flex" : "hidden"
              }`}
              id="navbar-default"
              ref={navRef}>
              <ul className="font-medium flex lg:flex-row flex-col justify-center items-center gap-[45px] text-[20px] mobile_navbar sm:pt-[20px] ">
                <li>
                  <Link
                    href="/"
                    className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
                      pathname === "/" ? "text-[#FBA116]" : "text-white"
                    }`}>
                    {pathname === "/" ? (
                      <Image
                        className="w-[28px] h-[20px]"
                        src={yellowgamepad}
                        alt="gamepad"
                      />
                    ) : (
                      <Image
                        className="w-[28px] h-[20px]"
                        src={whiteGamepad}
                        alt="gamepad"
                      />
                    )}
                    Gamezone
                  </Link>
                </li>

                <li>
                  <Link
                    href="/marketplace"
                    className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
                      pathname === "/marketplace"
                        ? "text-[#FBA116]"
                        : "text-white"
                    }`}>
                    {pathname === "/marketplace" ? (
                      <Image
                        className="w-[20px] h-[20px]"
                        src={yellowcart}
                        alt="gamepad"
                      />
                    ) : (
                      <Image
                        className="w-[20px] h-[20px]"
                        src={cart}
                        alt="gamepad"
                      />
                    )}
                    Marketplace
                  </Link>
                </li>

                <li>
                  <Link
                    href="/inscribe"
                    className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
                      pathname === "/inscribe" ? "text-[#FBA116]" : "text-white"
                    }`}>
                    {pathname === "/inscribe" ? (
                      <Image
                        className="w-[20px] h-[20px]"
                        src={yellowedit}
                        alt="gamepad"
                      />
                    ) : (
                      <Image
                        className="w-[20px] h-[20px]"
                        src={edit}
                        alt="gamepad"
                      />
                    )}
                    Inscribe
                  </Link>
                </li>

                <li>
                  <Link
                    href="/borrow"
                    className={`flex items-center hover:text-[#FBA116] gap-[6px] ${
                      pathname === "/borrow" ? "text-[#FBA116]" : "text-white"
                    }`}>
                    {pathname === "/borrow" ? (
                      <Image
                        className="w-[25px] h-[21px]"
                        src={yellownft}
                        alt="gamepad"
                      />
                    ) : (
                      <Image
                        className="w-[25px] h-[21px]"
                        src={nft}
                        alt="gamepad"
                      />
                    )}
                    NFTFI
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className={`flex items-center hover:text-[#FBA116] relative gap-[6px]  text-[#FFA800]`}>
                    
                     <div>
                     {isConnected ? (
                          <div >
                          <button className="border border-dashed border-[#ffffff]  px-2" onClick={handleConnection}>Disconnect</button>
                          </div>
                       
                      ) : (
                        <><Image
                        width={100}
                        height={28}
                        className=""
                        src={border}
                        alt="gamepad"
                      />
                        <button className="absolute left-[10px] bottom-[-1px] "onClick={handleConnectClick}>
                          Connect
                        </button></>)}
                        {showModal && <ConnectModal onClose={handleCloseModal} m={showMessage} y={connectToUnisat} />}
                      </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </nav>
      
    </>
  );
};


// {add.substring(0,5)}...{add.slice(-5)}