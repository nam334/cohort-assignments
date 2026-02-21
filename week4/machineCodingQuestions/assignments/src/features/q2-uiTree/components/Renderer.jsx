import React from "react";

const Renderer = ({ node }) => {
  if (!node) return null;

  const { text, ...restProps } = node.props || {};

  return React.createElement(
    node.type,
    restProps,
    ...(Array.isArray(node.children)
      ? node.children.map((nod) => <Renderer node={nod} />)
      : [text]),
  );
};

export default Renderer;
