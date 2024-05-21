import { useParams, Link } from "react-router-dom";
import { GoMoveToStart, GoChevronLeft } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import useStore from "../services/store/authStore";

const Details = () => {
  const { id } = useParams();
  const news = useStore((state) => state.news);
  const currentNews = useStore((state) => state.currentNews);
  const item = currentNews || news.find((n) => n.id === parseInt(id, 10));

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details my-32 mx-32">
      <div className="detailsIcons flex">
        <div className="flex items-center mr-8 text-[#909398]">
          <GoMoveToStart />
          <Link to="/">
            <span className="ml-2">Landing Page</span>
          </Link>
        </div>

        <div className="flex items-center text-[#909398]">
          <GoChevronLeft />
          <Link to="/news">
            <span className="ml-2">All News</span>
          </Link>
        </div>
      </div>

      <h1 className="font-bold my-3 text-[#f9a820] text-[34px]">{item.title}</h1>

      <div className="flex">
        <div className="detailsLeft w-3/4">
          <div className="detailsabout flex">
            <div className="flex items-center text-[#909398]">
              <FaUserCircle /> <p className="mr-6 ml-2">{item.title}</p>
            </div>
            <p className="detailsDate mr-6 text-[#909398]">{item.published_date}</p>
            <div className="flex items-center text-[#909398]">
              <MdRemoveRedEye />
              <p className="detailsView ml-2 text-[#909398]">{item.view_count}</p>
            </div>
          </div>

          <div className="detailsData">
            <div className="flex mt-12">
              <img src={item.image} alt="" className="w-2/4 rounded-md" />
              <p className="ml-8 text-[355474]">{item.content}</p>
            </div>
            <p className="mt-8 text-[355474]">{item.content}</p>
          </div>
        </div>

        <div className="detailsRight w-1/4">
          <p className="detailsRightText text-center font-semibold text-[#355474]">
            Other News
          </p>


              <div className="newsList h-auto w-auto mt-12 pl-10 bg-[#FDFDFD] rounded-md">
                <div className="mt-8">
                  <p className="detailsDate text-[#909398]">Today at 11:30 pm</p>
                  <div className="detailsBorder rounded-md flex mt-3 border border-[#ECEDED]">
                    <img
                      src="../src/assets/images/unsplash_ndN00KmbJ1c.png"
                      className="w-1/3 rounded-md"
                    />

                    <div className="mx-4">
                      <p className="detailsWorkshop font-medium mb-4 text-[#355474] text-[14px]">
                        Executive Data Science Workshop
                      </p>
                      <p className="detailsView flex justify-end items-center text-[#909398]">
                        {" "}
                        <MdRemoveRedEye /> {item.view_count}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="detailsDate text-[#909398]">September 3, 2023 at 9:10 pm</p>
                  <div className="detailsBorder rounded-md flex mt-3 border border-[#ECEDED]">
                    <img
                      src="../src/assets/images/unsplash_ndN00KmbJ1c.png"
                      className="w-1/3 rounded-md"
                    />

                    <div className="mx-4">
                      <p className="detailsWorkshop font-medium mb-4">
                        Executive Data Science Workshop
                      </p>
                      <p className="detailsView flex justify-end items-center text-[#909398]">
                        {" "}
                        <MdRemoveRedEye /> {item.view_count}
                      </p>
                    </div>
                  </div>

                  <div className="detailsBorder rounded-md flex mt-3 border border-[#ECEDED]">
                    <img
                      src="../src/assets/images/unsplash_ndN00KmbJ1c.png"
                      className="w-1/3 rounded-md"
                    />

                    <div className="mx-4">
                      <p className="detailsWorkshop font-medium mb-4">
                        Executive Data Science Workshop
                      </p>
                      <p className="detailsView flex justify-end items-center text-[#909398]">
                        {" "}
                        <MdRemoveRedEye /> {item.view_count}
                      </p>
                    </div>
                  </div>

                  <div className="detailsBorder rounded-md flex mt-3 border border-[#ECEDED]">
                    <img
                      src="../src/assets/images/unsplash_ndN00KmbJ1c.png"
                      className="w-1/3 rounded-md"
                    />

                    <div className="mx-4">
                      <p className="detailsWorkshop font-medium mb-4">
                        Executive Data Science Workshop
                      </p>
                      <p className="detailsView flex justify-end items-center text-[#909398]">
                        {" "}
                        <MdRemoveRedEye /> {item.view_count}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="detailsDate text-[#909398]">September 1, 2023 at 19:20 pm</p>
                  <div className="detailsBorder rounded-md flex mt-3 border border-[#ECEDED]">
                    <img
                      src="../src/assets/images/unsplash_ndN00KmbJ1c.png"
                      className="w-1/3 rounded-md"
                    />

                    <div className="mx-4">
                      <p className="detailsWorkshop font-medium mb-4">
                        Executive Data Science Workshop
                      </p>
                      <p className="detailsView flex justify-end items-center text-[#909398]">
                        {" "}
                        <MdRemoveRedEye /> {item.view_count}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
