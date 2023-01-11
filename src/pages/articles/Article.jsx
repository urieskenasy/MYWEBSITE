import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articlesData } from "../../assets/data/articlesData";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Article() {
  let { name } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState();
  useEffect(() => {
    articlesData.forEach((article) => {
      if (article.name == name) {
        setArticle(article);
      }
    });
  }, [name]);

  return article ? (
    <div
      className="mt-24 min-h-screen w-11/12 md:w-2/3 lg:w-2/5 "
      style={{ margin: "10rem auto" }}
    >
      <h2 className="mt-10 mb-20 mb-8 text-5xl font-extralight dark:text-indigo-50">
        {article.name}
      </h2>

      {article.content.map((item, i) => {
        return (
          <div className="flex flex-col justify-center items-center w-full">
            {item.paragraphs.map((para, i) => {
              return (
                <p className="mb-4 text-lg  text-justify dark:text-indigo-50 font-light">
                  {para}
                </p>
              );
            })}
            {item.code && (
              <div className="w-96 mt-10 mb-10 rounded overflow-hidden">
                <SyntaxHighlighter
                  wrapLongLines="true"
                  language="javascript"
                  style={dark}
                >
                  {item.code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
