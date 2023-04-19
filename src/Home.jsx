import React, { useState } from 'react'
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User"



const mockEmployees = [
  {
    id: 0,
    name: "Ribbin",
    lastname: 'Robin',
    position: "Designer"
  },
  {
    id: 1,
    name: "Mai",
    lastname: "Melody",
    position: "Engineer"
  },
  {
    id: 2,
    name: "Yeans",
    lastname: "Yoghurt",
    position: "Manager"
  },
]


const Home = () => {


  const [employees, setEmployees] = useState([...mockEmployees]);

  const [sector, setSector] = useState("");

  const handleAdminClick = () => {
    setSector("admin");
  };

  const handleUserClick = () => {
    setSector("user");
  };

  return (
    <Layout>
      <h1>Generation Thailand</h1>
      {sector === "user" ? <h1>Home - User Assessment</h1> :
        sector === "admin" ? <h1>Home - Admin Assessment</h1> : <h1>Home - React Assessment</h1>}
      <button onClick={handleUserClick}>User Home sector</button>
      <button onClick={handleAdminClick}>Admin Home sector</button>
      {sector === "user" && <User employees={employees} />}
      {sector === "admin" && <Admin employees={employees} setEmployees={setEmployees} />}
    </Layout>
  )
}

export default Home;