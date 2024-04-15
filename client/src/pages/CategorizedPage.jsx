import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import moment from "moment";

import api from "../utils/api";

const CategorizedPage = () => {
  const navigate = useNavigate();

  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);

  const deleteData = async (id) => {
    await api
      .get(`delete/${id}`)
      .then((response) => {
        navigate("/");
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteHandle = (id) => {
    deleteData(id);
  };

  const fetchData = async () => {
    await api
      .get(`blogs/?category=${category}`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [category, deleteHandle]);

  return (
    <div className="home category">
      {blogs.map((item) => {
        return (
          <div key={item.id} className="blog">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <span className="detail-time">
              {moment(item.updated).format("DD/MM/YYYY HH:mm")}
            </span>
            <br />
            <Link className="detail-btn" to={`/blog/${item.id}`}>
              Go to detail
            </Link>
            <Link className="update-btn" to={`/update/${item.id}`}>
              Update
            </Link>
            <button
              onClick={() => deleteHandle(item.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CategorizedPage;
