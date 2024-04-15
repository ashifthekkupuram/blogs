import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import moment from "moment";

import api from "../utils/api";

const DetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [blog, setBlog] = useState({});

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

  const fetchData = async () => {
    await api
      .get(`blog/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="home category">
      <h3 className="detail-title">{blog.title}</h3>
      <p className="detail-content">{blog.content}</p>
      <span className="detail-time">
        {moment(blog.updated).format("DD/MM/YYYY HH:mm")}
      </span>
      <Link className="update-btn" to={`/update/${blog.id}`}>
        Update
      </Link>
      <button
        className="delete-btn"
        onClick={() => {
          deleteData(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DetailPage;
