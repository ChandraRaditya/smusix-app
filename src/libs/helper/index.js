export const getUrl = () => {
  const hash = window.location.hash.substring(1);
  const params = {};
  hash.split("&").map((hk) => {
    let temp = hk.split("=");
    params[temp[0]] = temp[1];
  });
  return params;
};
