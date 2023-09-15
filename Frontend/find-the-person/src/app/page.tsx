'use client'

import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import { useAuth } from "@/context/userContext";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Hero />
      <h1>
{currentUser?.username}
      </h1>
    </>
  )
}

export default Home;