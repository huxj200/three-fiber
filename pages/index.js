import React from 'react'
import ShowModel from '../components/Model/showModel'

export default function Home() {
  return (
    <div >

      <h1 className='text-3xl font-bold'> Next</h1>
      <div className='text-3xl font-bold'> Next</div>
      <ShowModel>{{ modelUrn: "https://study-fiber.oss-cn-shanghai.aliyuncs.com/CarBody.gltf" }}</ShowModel>


    </div>
  )
}
