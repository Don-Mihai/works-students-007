async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users?per_page=12");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const users = data.data;
    console.log("--------------------");

    console.log("Фамилии всех пользователей:");
    for (const user of users) {
      console.log(user.last_name);
    }
    console.log("--------------------");

    console.log("Данные пользователей с фамилией, начинающейся на 'F':");
    for (const user of users) {
      if (user.last_name.charAt(0).toLowerCase() === "f") {
        console.log(user);
      }
    }
    console.log("--------------------");

    const sentence =
      "Наша база содержит данные следующих пользователей: " +
      users.reduce((acc, user) => {
        return acc + user.first_name + " " + user.last_name + ", ";
      }, "");
    console.log(sentence.slice(0, -2));
    console.log("--------------------");

    console.log("Названия всех ключей в объекте пользователя:");
    if (users.length > 0) {
      const userKeys = Object.keys(users[0]);
      console.log(userKeys);
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

fetchData();
