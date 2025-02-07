"use client";
import { useState } from 'react'
import LoginPage from './components/LoginPage'
import DataPage from './components/Datapage'



function Home() {

  const [page, setPage] = useState('login')
  const [userData,setUserData] = useState([])


  return (
    <div>
      {page === 'login' && <LoginPage setPage={setPage} setUserData = {setUserData} />}

      {page === 'data' && <DataPage setPage={setPage} data={userData} setUserData = {setUserData}  />}

    </div>
  )
}

export default Home
