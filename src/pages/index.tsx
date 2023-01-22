import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [value, setValue] = useState(0)
  // const primary_funcs = {
  //   add: ()=> setValue(prev=> prev+1),
  //   subtract:()=>setValue(prev=> prev-1)
  // }
  const primary_funcs = {
    add: ()=> setValue(prev=> prev + 1),
    subtract:()=>setValue(prev=> prev - 1)
    }
  return (
    <>
      <h1>{value}</h1>
      <button onClick={()=>primary_funcs.add()}>Add</button>
      <button onClick={()=>primary_funcs.subtract()}>Subtract</button>
    </>
  )
}
