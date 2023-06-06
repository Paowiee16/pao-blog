import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Mario");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Success, new blog created");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2> Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Pao">Pao</option>
          <option value="Joy">Joy</option>
        </select>
        <label>Blog Title: </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {isPending && <button className="newBlog">Adding blog ...</button>}
        {!isPending && <button className="newBlog"> Add Blog</button>}
      </form>
      <div style={{ textAlign: "left" }}>
        <h2>Preview</h2>
        <h1>{title}</h1>
        {author && <p> Written by {author}</p>}
        <p className="content">{body}</p>
      </div>
    </div>
  );
};

export default Create;
