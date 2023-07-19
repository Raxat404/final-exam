import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import useHttp from "../../hook/useHttp";
import ContentItem from "../ContentItem/ContentItem";

function Content({ url, heading }) {
  const { request } = useHttp();
  const [list, setList] = useState([]);

  useEffect(() => {
    request(url).then((data) => setList(data));
  }, []);

  return (
    <div className="content-wrapper" id={heading}>
      <Heading text={heading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.length > 0 ? (
          list.map((item) => <ContentItem key={item.id} {...item} />)
        ) : (
          <h1>{heading} is not exist!</h1>
        )}
      </div>
    </div>
  );
}

export default Content;
