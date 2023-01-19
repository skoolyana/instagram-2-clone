import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header"
import Feed from "../components/Feed"
import Modal from "../components/Modal"


const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 By Sunil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  

    {/* Header */}

    <Header></Header>
  
  
    

    {/* Feed */}

  <Feed></Feed>
  
    {/* Modal */}

    <Modal></Modal>


    </div>
  )
}

export default Home
