// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import unisat from "../../assets/unisat.svg";
// import i_icon from "../../assets/i_icon.png";

// const ConnectModal = ({ onClose }) => {
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };
//   const connectToUnisat = async () => {
//     try {
//       // Check if Unisat is installed
//       if (window.unisat) {
//         // Unisat is installed, request access to user accounts
       
//         const accounts = await window.unisat.requestAccounts();
//         console.log("Connected to Unisat:", accounts);
       
//         // Proceed with using accounts
//       } else {
//         // Unisat is not installed, display a message
//         console.log("Unisat is not installed.");
//         // Show the message
//         setShowMessage(true);
//         // Hide the message after 3 seconds
//         setTimeout(() => setShowMessage(false), 3000);
//       }
//     } catch (error) {
//       // Handle errors
//       console.error("Error connecting to Unisat:", error);
//     }
//   };
//   const [showMessage, setShowMessage] = useState(false);
  

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-[1000] cursor-default "
//       onClick={handleOverlayClick}
//     >
//       <div className="bg-neutral-900  p-8 rounded-2xl h-[500px] w-[350px] relative">
//         <h2 className="text-2xl font-bold mb-4 flex justify-center ">
//           Choose Wallet
//         </h2>
//         <button
//           className="text-white mb-4 flex flex-row border border-solid border-gray-800 rounded-md w-[290px] py-2 px-2 items-center "
//           onClick={connectToUnisat}
//         >
//           <Image
//             src={unisat}
//             alt="logo"
//             className="h-[45px] w-[45px] mr-[40px] "
//           />{" "}
//           UniSat Wallet
//         </button>

//         <button
//           className=" hover:bg-neutral-800 text-white text-opacity-50 border border-solid border-gray-800 font-bold py-0 px-2 rounded-md absolute right-2 top-2"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//       {showMessage && (
//         <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded w-[390px] ">
//           <h1 className="flex">
//             <Image
//               src={i_icon}
//               alt="logo"
//               className="h-[25px] w-[25px] mr-4 "
//             />
//             UniSat Wallet not installed
//           </h1>

//           <p className="text-sm pl-10">
            
//             After installing the extension, please refresh the page
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConnectModal;




//  // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });






import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import unisat from "../../assets/unisat.svg";
import i_icon from "../../assets/i_icon.png";

const ConnectModal = ({ onClose,m,y }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-[1000] cursor-default "
      onClick={handleOverlayClick}
    >
      <div className="bg-neutral-900  p-8 rounded-2xl h-[500px] w-[350px] relative">
        <h2 className="text-2xl font-bold mb-4 flex justify-center ">
          Choose Wallet
        </h2>
        <button
          className="text-white mb-4 flex flex-row border border-solid border-gray-800 rounded-md w-[290px] py-2 px-2 items-center "
          onClick={y}
        >
          <Image
            src={unisat}
            alt="logo"
            className="h-[45px] w-[45px] mr-[40px] "
          />{" "}
          UniSat Wallet
        </button>

        <button
          className=" hover:bg-neutral-800 text-white text-opacity-50 border border-solid border-gray-800 font-bold py-0 px-2 rounded-md absolute right-2 top-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      {m && (
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded w-[390px] ">
          <h1 className="flex">
            <Image
              src={i_icon}
              alt="logo"
              className="h-[25px] w-[25px] mr-4 "
            />
            UniSat Wallet not installed
          </h1>

          <p className="text-sm pl-10">
            
            After installing the extension, please refresh the page
          </p>
        </div>
      )}
    </div>
  );
};

export default ConnectModal;




 // const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });