import React from "react";
import { uiSchema } from "./data/uiSchema.js";
import Renderer from "./components/Renderer";

const JSONRendererPage = () => {
  return <Renderer node={uiSchema} />;
};

export default JSONRendererPage;
