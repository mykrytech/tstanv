import React from 'react'
import {picturetest, picture1, picture2} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: picturetest, title: 'Ubur-ubur ikan lele -Januari 20, 2024', description: "Ga hts lagi le...."},   
    { Image: picture1, title: 'Siapa nich?', description: "Parkiran dcastello jadi saksi"},
    { Image: picture2, title: 'Happy Anniversary -Januari 20, 2025', description: "Makasih udah bertahan sejauh ini -aku dan kamu selamanya."},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Aku dan kamu
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
            <ArrowLeft /> kembali
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message