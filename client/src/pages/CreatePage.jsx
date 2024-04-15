import React from "react";

import Form from "../components/Form";

const CreatePage = () => {
  const updating = false;

  return (
    <div className="home category">
      <h1 className="heading">Create Blog</h1>
      <Form updating={updating} />
    </div>
  );
};

export default CreatePage;
