const url = "http://192.168.43.244:8080";  // __main__

export const getJSON = (endpoint, params) => {
  return fetch(`${url}/${endpoint}`, {
    method: "post",
    body: JSON.stringify(params)
  }).then(res => res.json());
};

export const callAction = ({type, apiEndpoint}, params) => {
  return async(dispatch) => {
    const json = await getJSON(apiEndpoint, params)
    console.log(json);
    return dispatch({
      type: type,
      data: json
    })
  } 
}