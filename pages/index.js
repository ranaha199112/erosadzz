import React, { useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Security from "../components/Security";
import { motion } from "framer-motion";
import useMockLogin from "../hooks/useMockLogin";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  // const { login } = useMockLogin({ setShowModal });
  return (
    <>
      {!showModal && (
        <>
          <Header />
          <Login />
          <Footer />
        </>
      )}

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Security setShowModal={setShowModal} />
        </motion.div>
      )}
    </>
  );
}

// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Login from "../components/Login";

// export default function Home() {
//   return (
//     <div className="">
//       <Header />
//       <Login />
//       <Footer />
//     </div>
//   );
// }
