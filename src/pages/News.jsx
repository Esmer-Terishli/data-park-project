import { useEffect } from "react";
import { Button } from "../common/components/ui/button";
import Cards from "../common/components/Cards/index";
import { Link } from "react-router-dom";
import useStore from '../services/store/authStore';

import "../pages/style.css";

const News = () => {
  const fetchNews = useStore((state) => state.fetchNews);
  const news = useStore((state) => state.news);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      <div className="buttons mt-28 flex justify-center">
        <Button className="mx-2 px-16">News</Button>
        <Button className="mx-2 px-16">Blogs</Button>
        <Button className="mx-2 px-16">Events</Button>
      </div>

      <div className="fixedButton absolute right-8 m-4">
        <Link to="/form">
          <img
            src="src/assets/images/Add the new news.png"
            alt=""
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div className="mt-4 mb-24">
        <Cards news={news} />
      </div>
    </>
  );
};

export default News;
