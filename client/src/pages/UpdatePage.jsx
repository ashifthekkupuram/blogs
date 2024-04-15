import React from "react";
import { useParams } from "react-router-dom";

import Form from "../components/Form";

const UpdatePage = () => {
  const { id } = useParams();
  const updating = true;

  return (
    <div className="home category">
      <h1 className="heading">Update Blog</h1>
      <Form updating={updating} id={id} />
    </div>
  );
};

export default UpdatePage;
