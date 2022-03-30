import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HeaderNav } from '../components/header-navigation'

const Home = ({ heroes }) => {
  console.log(heroes)
  return (
    <>
      <HeaderNav />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
  )
  const heroes = await res.json()

  return {
    props: {
      heroes,
    },
  }
}
export default Home
