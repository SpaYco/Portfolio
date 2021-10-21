import type { NextPage } from 'next'
import Nav from '../components/Nav'
import About from '../components/About'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <About />
    </>
  )
}

export default Home
