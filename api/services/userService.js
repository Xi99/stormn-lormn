import userRepo from "../repositories/userRepo.js";

export const getUsers = async () => {
  console.log("in userService.js at getUsers()");
  const users = await userRepo.selectAll();

  var result = new Array();

  users.rows.map((user) => {
    var obj = new Object();

    users.rowDescription.columns.map((el, i) => {
      obj[el.username] = user[i];
    });
    result.push(obj);
  });

  return result;
};

export const getUser = async (user_id) => {
  const users = await userRepo.selectById(user_id);

  var obj = new Object();
  users.rows.map((user) => {
    users.rowDescription.columns.map((el, i) => {
      obj[el.username] = user[i];
    });
  });

  return obj;
};

export const createUser = async (userData) => {
  const newUser = {
    username: String(userData.username),
    brand: String(userData.brand),
    is_premium: "is_premium" in userData ? Boolean(userData.is_premium) : false,
    registration_date: new Date(),
  };

  await userRepo.create(newUser);

  return newUser.id;
};

export const updateUser = async (user_id, userData) => {
  const user = await getUser(user_id);

  if (Object.keys(user).length === 0 && user.constructor === Object) {
    throw new Error("User not found");
  }

  const updatedUser = {
    username:
      userData.username !== undefined
        ? String(userData.username)
        : user.username,
    // brand: userData.brand !== undefined ? String(userData.brand) : user.brand,
    // is_premium:
    //   userData.is_premium !== undefined
    //     ? Boolean(userData.is_premium)
    //     : user.is_premium,
  };

  userRepo.update(user_id, updatedUser);
};

export const deleteUser = async (user_id) => {
  userRepo.delete(user_id);
};
