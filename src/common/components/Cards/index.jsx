import { FaUserCircle, FaComment } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

import '../Cards/style.css'

const Cards = ({ title, description, imageUrl }) => {
  return (
    <div className="w-1/4 rounded overflow-hidden shadow-lg m-4 mt-12">
      <div className="">
        <img
          className="w-full"
          src="src/assets/images/unsplash_ndN00KmbJ1c.png"
          alt="Icon"
        />
      </div>

      <div className="px-6 py-4">
        <div className="textIcon flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <FaUserCircle className="w-6 h-6" />
            </div>
            <p className="text-base ml-2">Text 1</p>
          </div>
          <div className="flex items-center">
            <div className="p-2">
              <FaComment className="w-4 h-4" />
            </div>
            <p className="text-base mr-4">16</p>

            <div className="p-2">
              <MdRemoveRedEye className="w-4 h-4" />
            </div>
            <p className="text-base">123</p>
          </div>
        </div>
        <div
          className="borderLine border-l-2 pl-4"
        
        >
          <p className="text-base mt-4">{description}</p>
        </div>
        <div className="dateTime flex justify-end mt-4">
          <p className="text-base">14.05.2023</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
