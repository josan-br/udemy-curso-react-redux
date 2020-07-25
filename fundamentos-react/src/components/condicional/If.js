export default ({ test, children }) => {
  const elseChild = children.filter(
    (child) => child.type && child.type.name === "Else"
  )[0];

  const ifChildren = children.filter((child) => child !== elseChild);

  if (test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  } else {
    return false;
  }
};

export const Else = (props) => props.children;
