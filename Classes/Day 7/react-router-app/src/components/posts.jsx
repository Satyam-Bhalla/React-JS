import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const { sort } = queryString.parse(location.search);
  // console.log(sort);
  return (
    <div>
      <h1>Posts</h1>
      Year:{match.params.year} , Month:{match.params.month}
      {sort && <h2>Sort: {sort}</h2>}
    </div>
  );
};

export default Posts;
