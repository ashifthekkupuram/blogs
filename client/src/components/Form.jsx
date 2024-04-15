import { useState, useEffect } from "react";

import api from "../utils/api";

const Form = ({ updating, id }) => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "1",
  });

  const fetchCategories = async () => {
    await api.get("categories/").then((response) => {
      setCategories(response.data);
    });
  };

  const createData = async (data) => {
    await api
      .post("blogs/", data)
      .then((response) => {
        setForm({ title: "", content: "", category: "1" });
        alert(`${response.data.title} Blog Created Successfully`);
      })
      .catch((error) => {
        alert("Blog Creation Failed");
      });
  };

  const getData = async (id) => {
    await api
      .get(`blog/${id}`)
      .then((response) => {
        setForm({
          title: response.data.title,
          content: response.data.content,
          category: response.data.category.id,
        });
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  };

  const updateData = async (id, data) => {
    await api
      .post(`update/${id}/`, data)
      .then((response) => {
        alert(`Succesfully Updated ${response.data.title}`);
      })
      .catch((error) => {
        alert("Updation Failed");
      });
  };

  useEffect(() => {
    if (updating) {
      getData(id);
    } else {
      fetchCategories();
    }
  }, []);

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="title">Title: </label>
            </td>
            <td>
              <input
                className="title-input"
                value={form.title}
                onChange={(e) => {
                  setForm({
                    ...form,
                    title: e.target.value,
                  });
                }}
                type="text"
                id="title"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="content">Content: </label>
            </td>
            <td>
              <textarea
                className="content-input"
                value={form.content}
                onChange={(e) => {
                  setForm({
                    ...form,
                    content: e.target.value,
                  });
                  console.log(form);
                  console.log(category);
                }}
                type="text"
                id="content"
              />
            </td>
          </tr>
          {!updating && (
            <tr>
              <td>
                <label htmlFor="category">Category: </label>
              </td>
              <td>
                <select
                  className="cat-select"
                  onChange={(e) => {
                    setForm({
                      ...form,
                      category: e.target.value,
                    });
                  }}
                  name="category"
                  id="category"
                >
                  {categories.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.category_name}
                      </option>
                    );
                  })}
                </select>
              </td>
            </tr>
          )}
          <tr>
            <td colSpan={2}>
              <button
                className="create-button"
                onClick={(e) => {
                  e.preventDefault();
                  if (updating) {
                    updateData(id, form);
                  } else {
                    createData(form);
                  }
                }}
              >
                {updating ? "Update" : "Create"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
