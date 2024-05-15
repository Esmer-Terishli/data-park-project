import { Button } from "../common/components/ui/button";
import Cards from "../common/components/Cards/index";

import "../pages/style.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <div className="mt-28 flex justify-center">
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

      <div className="flex flex-wrap justify-center mt-4 mb-24">
        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />

        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />

        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />

        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />

        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />

        <Cards
          title="Welcome to Our Platform"
          description="Explore our latest news and join the discussion in the forum. Explore our latest news and join the discussion in the forum."
          imageUrl="src/assets/images/unsplash_ndN00KmbJ1c.png"
        />
      </div>
    </>
  );
};

export default News;
