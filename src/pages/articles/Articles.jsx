import React from "react";
import { Link } from "react-router-dom";
import { articlesData } from "../../assets/data/articlesData";
export default function Articles() {
  return (
    <div
      className=" flex flex-col justify-center items-center dark:text-indigo-50 w-11/12 md:w-2/3 lg:w-2/5 m-h-screen"
      style={{ margin: "10rem auto" }}
    >
      <h2 className="mt-10 mb-20 mb-8 text-5xl font-extralight dark:text-indigo-50">
        Articles
      </h2>
      <p className="mb-4 text-lg font-light text-left">
        I was thinking to myself, what would be a nice way to bring a little
        more content to my web page, but also bring content that would be
        helpful and meaningful for some of us. The answer was very clear to me.
        when starting learning to program, I had some topics which were harder
        for me to understand, and back then I got many times frustrated,
        thinking to myself "am I stupid? maybe I'm not a fit for this job?" and
        more negative thoughts, and now I have a chance to try and explain
        myself these topics, and also to repeat it myself again...🤓
      </p>

      <div className=" h-auto flex mt-20  dark:text-indigo-50 justify-center items-center flex-wrap gap-9 mb-20">
        {articlesData.map((article, i) => {
          if(i === 0){
            return null
          }
          return <Card key={i} {...article} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ id, name, content }) => {
  return (
    <Link key={id} to={`/article/${name}`}>
      <div className=" overflow-hidden text-ellipsis  inline-block transition-ease rounded duration-500 cursor-pointer hover:scale-105 dark:bg-gray-800 text-indigo-50 bg-indigo-800 p-4 w-full  h-28">
        <h3 className=" mb-2 text-2xl font-light dark:text-indigo-50 text-left">
          {name}
        </h3>

        <p className="mb-4 text-lg inline-block font-light text-left float-left overflow-hidden relative inline-block text-ellipsis whitespace-nowrap w-96">
          {content[0].paragraphs[0]}
        </p>
      </div>
    </Link>
  );
};
