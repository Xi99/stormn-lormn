import { getUsers } from "../services/userService.js";

export default async ({ response }) => {
  console.log("In Controllers at getUsers.js");
  response.body = await getUsers();
};
