import top from "./top.json";

export const fetchTop = () => {
  console.log(top.data.children);
  return new Promise((resolve, reject) => resolve(top.data.children));
};

export const fetchReddit = id => {
  return new Promise((resolve, reject) => {
    const items = top.data.children;

    const reddit = items.find(item => item.data.id === id);

    console.log(reddit);

    if (reddit) {
      resolve(reddit);
    } else {
      reject(new Error("Post not found"));
    }
  });
};
