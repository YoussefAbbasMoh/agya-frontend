import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobelContext";
import SidebarGuest from "../components/sidebar-guest";
import { useLocation } from "react-router-dom";

export default function Filter() {
  // const { filter } = useParams();

  const { setIsAuthUser, isAuthUser } = useContext(GlobalContext);
  const auth = isAuthUser?.email;
  const params = new URLSearchParams(window.location.search);
  const filter = params.get("filter");

  const navigate = useNavigate();
  // const [articlesCount, setArticlesCount] = useState();
  const [articlesData, setArticlesData] = useState([]);
  // const [featuredArticlesData, setFeaturedArticlesData] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `https://agyademo.uber.space/api/articles/articles/filter?filter=${filter}`,
        {}
      ).then((response) => {
        response.json().then((data) => {
          setArticlesData(data.data);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, [filter]);

  return (
    <div className="px-4 lg:px-[150px]">
      <Navbar />

      <div className="flex my-10 ">
        {auth ? (
          <div className=" h-fit">
            <Sidebar className="bg-gray-800 text-white " />
          </div>
        ) : (
          <SidebarGuest />
        )}
        <div className=" w-full  px-3 py-8">
          {/* <h1 className="mb-7 text-left font-bold text-3xl text-black"></h1> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articlesData === undefined ? (
              <div>Loading</div>
            ) : (
              articlesData.map((article, index) => (
                <div
                  key={index}
                  className="group overflow-hidden cursor-pointer  rounded-lg min-h-72 h-72 max-h-72 border border-main bg-white shadow transition-transform hover:-translate-y-1 flex flex-col"
                  onClick={() => navigate(`/article/${article._id}`)}
                >
                  <div className="overflow-hidden ">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className=" w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8 flex-grow flex flex-col justify-between text-center">
                    <h2 className="mb-1 text-base font-bold leading-tight text-gray-900">
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      {article.authorName}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
