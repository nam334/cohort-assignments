import { treeData } from "../utils/data";
import "./TreeView.css";
import TreeNode from "./TreeNode";
import { generateChildNodes } from "../utils/helper";
import { useState } from "react";
import { useEffect } from "react";
const TreeView = () => {
  return (
    <>
      {treeData?.map((treeData, index) => (
        <TreeNode treeData={treeData} key={treeData?.id} />
      ))}
    </>
  );
};

export default TreeView;
