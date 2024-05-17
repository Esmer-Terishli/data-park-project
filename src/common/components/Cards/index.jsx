import { FaUserCircle, FaComment } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import '../Cards/style.css';
import useStore from '../../../services/store/authStore';

const Cards = () => {
  const news = useStore((state) => state.news);
  const setCurrentNews = useStore((state) => state.setCurrentNews);
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    setCurrentNews(item);
    navigate(`/details/${item.id}`);
  };

  return (
    <>
      <div className="my-8 ml-32">
        {news.length > 0 ? <span>{news.length} news</span> : <span>Loading...</span>}
      </div>

      <div className="flex flex-wrap justify-center">
        {news.length > 0 ? (
          news.map((item) => (
            <div
              key={item.id}
              className="w-1/4 rounded overflow-hidden shadow-lg m-4 cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <div className="">
                <img className="w-full" src={item.image} alt="Icon" />
              </div>

              <div className="px-6 py-4">
                <div className="textIcon flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <FaUserCircle className="w-6 h-6" />
                    </div>
                    <p className="text-base ml-2">{item.title}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2">
                      <FaComment className="w-4 h-4" />
                    </div>
                    <p className="text-base mr-4">{item.comment_count}</p>

                    <div className="p-2">
                      <MdRemoveRedEye className="w-4 h-4" />
                    </div>
                    <p className="text-base">{item.view_count}</p>
                  </div>
                </div>
                <div className="borderLine border-l-2 pl-4">
                  <p className="text-base mt-4">{item.content}</p>
                </div>
                <div className="dateTime flex justify-end mt-4">
                  <p className="text-base">{item.published_date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
};

export default Cards;
