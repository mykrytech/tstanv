import React from 'react'
import { picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10  } from '../assets'; 
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: picture3, title: 'Hts mwehehe', description: "Allo ini adik keciknya aku yag sempet htsan looo...."},   
    { Image: picture4, title: 'Main ke Semarang', description: "Nyamperin adik  keciknya aku yang cantik buangettt...<3"},   
    { Image: picture5, title: 'Jalan-jalan Bogor', description: "Main air sama adik kecik"},   
    { Image: picture6, title: 'Tahun Baruan', description: "Liat petasan sama adik<3"},
    { Image: picture7, title: 'Tahun Baruan', description: "Main abis tahun baruan"},
    { Image: picture8, title: 'Main sama adik', description: "Main sama adik keciknya aku, sambil manjain pipinya yang gemoyyyyyyyy"},

    { Image: picture9, title: 'Omaigatt dikiss adik :3', description: "Mie goreng mie kuah, Muachhh Muachhh Muachhh :*"},
    { Image: picture10, title: 'Foto sama adikkk', description: "Teknik abiss anaknya..."},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Kesayangan Aku
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Kembali
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture