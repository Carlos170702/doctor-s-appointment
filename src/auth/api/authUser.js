export const login = async (datas) => {
  var formdata = new FormData();
  formdata.append("email", datas?.email);
  formdata.append("password", datas?.password);

  var requestOptions = {
    method: "POST",
    body: formdata,
  };

  try {
    const request = await fetch(
      "https://citasapi.onrender.com/users/login/",
      requestOptions
    );
    const response = await request.json();

    return response;
  } catch (e) {
    return e;
  }
};

// SUCCESS
// {
//   console.log(result);
//   result.Status
//     ? localStorage.setItem("rol", JSON.stringify(result?.Data?.rol))
//     : () => {
//         setIsLoading(false);
//         setMessage({
//           status: true,
//           message: {
//             titulo: "user",
//             error: result.Message,
//           },
//         });
//       };
// }
