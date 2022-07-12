import React from 'react'
import Layout from '../components/Layout'
// import ShowModel from '../components/Model/showModel'

export default function Home() {
  return (
    <div >
      <Layout>{{ title: "目录" }}</Layout>
      <h1 className='text-3xl font-bold'> Next</h1>
      <div className='text-3xl font-bold'> Next</div>



      {/* <ShowModel>{{ modelUrn: "https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.gltf" }}</ShowModel> */}
    </div>
  )
}
