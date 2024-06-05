import './app.css'
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from 'react-icons/io5';

function Card({ image, title, description, tags }) {
  const [color, setColor] = useState('text-gray-400');
  const [flag, setFlag] = useState(true);

  const handleBookmarks = () => {
    if (flag) {
      setColor('text-gray-800');
      setFlag(false);
    } else {
      setColor('text-gray-400');
      setFlag(true);
    }
  };
  let tags_color = 'bg-purple-300'

  if (tags == 'popular') tags_color = "bg-yellow-500";
  else if (tags == 'not popular') tags_color = "bg-green-500";
  else if (tags == 'expensive') tags_color = "bg-red-500"

  return (
    <div className="flex flex-col gap-1 aspect-[4/5] w-[400px] rounded-lg glass-effect ">
      <div
        className=" relative aspect-4/5 w-[400px] bg-cover bg-center rounded-lg" 
      >
        <img src={image} className='aspect-4/5 w-[400px] rounded-lg shadow-lg object-cover ' />
        <div className="rounded-full bg-white absolute top-5 left-4 px-1 p-1 backdrop-blur-2xl hover:opacity-80 cursor-pointer">
        <IoShareSocialOutline className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-300" />

        </div>

        
        <div className={`rounded-lg ${tags_color} w-fit px-5 absolute top-5 right-4 shadow-md capitalize font-serif font-normal hover:px-6 hover:py-1 transition-all duration-300 cursor-pointer`}>
        {tags}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-1 pl-5 pb-3">
          <div className="font-bold">
            {title}
          </div>
          <div className="font-sem pr-5">
            {description}
          </div>
        </div>

        <div className="flex justify-center items-center pr-5">
          <div className={`items-center flex justify-center pl-10`}>
            <div className={`hover:cursor-pointer transition duration-150 ${color}`} onClick={handleBookmarks}>
              <FaBookmark className='h-6 w-5 hover:h-14 transition-all duration-300 hover:shadow-sm' />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Card;
