import { useEffect } from "react";
import { Button } from "../common/components/ui/button";
import Cards from "../common/components/Cards/index";
import { Link } from "react-router-dom";
import useStore from "../services/store/authStore";

const News = () => {
  const fetchNews = useStore((state) => state.fetchNews);
  const news = useStore((state) => state.news);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      <div className="buttons mt-28 flex justify-center flex-wrap">
        <Button className="mx-2 my-2 px-8 sm:px-16 bg-[#f9a820] duration-700">News</Button>
        <Button className="mx-2 my-2 px-8 sm:px-16 bg-[#f9a820] duration-700">Blogs</Button>
        <Button className="mx-2 my-2 px-8 sm:px-16 bg-[#f9a820] duration-700">Events</Button>
      </div>

      <div
        className="fixedButton absolute right-8 m-4"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <Link to="/form">
          <img
            src="src/assets/images/Add the new news.png"
            alt=""
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="mt-4 mb-24 px-4 sm:px-8">
        <Cards news={news} />
      </div>
    </>
  );
};

export default News;
