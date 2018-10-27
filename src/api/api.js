const url = "http://192.168.163.56";

export const getJSON = (endpoint, params) => {
  return fetch(`${url}/${endpoint}`, {
    method: "post",
    body: JSON.stringify(params)
  }).then(res => res.json());
};
