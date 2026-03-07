import React from "react";
import { generateChildNodes } from "../utils/helper";
import { useEffect } from "react";
import { useState } from "react";

const TreeNode = ({ treeData }) => {
  console.log("res is", treeData);
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const clickHandler = () => {
    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    if (!toggle || result?.length > 0) return;
    const fun = async () => {
      try {
        setLoading(true);
        let res = await generateChildNodes();

        setResult(res);
        setLoading(false);
      } catch (err) {}
    };
    fun();
  }, [toggle]);

  return (
    <>
      <div className="treenode-container">
        <div>{treeData?.name}</div>
        {treeData?.hasChildren ? (
          <div className="downArrow" onClick={clickHandler}>
            {toggle ? "▼" : "▶"}
          </div>
        ) : null}
        <div>
          {toggle ? (
            loading ? (
              <div className="spinner"></div>
            ) : (
              result?.map((treeData) => (
                <TreeNode treeData={treeData} key={treeData?.id} />
              ))
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TreeNode;
