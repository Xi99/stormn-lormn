import { createUser } from "../services/userService.js";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid beer data" };
    return;
  }

  const {
    value: { username, password },
  } = await request.body();

  if (!username || !password) {
    response.status = 422;
    response.body = {
      msg: "Incorrect user data. Username and password are required",
    };
    return;
  }

  const userId = await createBeer({ username, password });

  response.body = { msg: "Beer created", userId };
};
