import axiosInterface from "./axiosInterface";

/** Response status code in P-NUT is 200 or 401.
 * This function is needed email, password.
 */

async function loginAPI(email, password) {
  const response = await axiosInterface("POST", "/api/login", {
    email,
    password,
  });
  if (response.status === 200) {
    return response;
  }

  return response.response;
}

export default loginAPI;
