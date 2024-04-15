import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../utils/api";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await api
      .get("categories/")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sidebar">
      <div className="category">
        <Link className="category-btn" to={"/"}>
          all
        </Link>
      </div>
      {categories.map((item) => {
        return (
          <div key={item.id} className="category">
            <Link className="category-btn" to={`/${item.category_name}`}>
              {item.category_name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
