import PageLayout from "./components/PageLayout"
import LandingPageText from "./components/LandingPageText"
import LandingPageImg from "./components/LandingPageImg";
import { useState } from "react";
import SignUpModal from "./components/SignUp";


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    console.log(showModal);
  };

  return (
    <PageLayout>
      <LandingPageText onClick={handleShowModal} />
      <LandingPageImg />
    </PageLayout>
  )
}

export default App

