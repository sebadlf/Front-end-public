import top from "./top.json";

export const fetchTop = () => {
  console.log(top.data.children);
  return new Promise((resolve, reject) => resolve(top.data.children));
};
