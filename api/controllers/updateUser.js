import { updateUser } from "../services/userService.js";

export default async ({ params, request, response }) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { username, password },
  } = await request.body();

  await updateUser(userId, { username, password });

  response.body = { msg: "User updated" };
};
