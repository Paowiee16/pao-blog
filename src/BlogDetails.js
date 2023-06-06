import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div> Loading ...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2> {blog.title} </h2>
          <p>
            Written by <span className="blog-author">{blog.author} </span>
          </p>
          <div className="blog-body">{blog.body}</div>
          <button className="delete" onClick={handleClick}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
