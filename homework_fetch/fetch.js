async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users?per_page=12");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const users = data.data;

    const arr = users.map((user) => user.last_name);

    console.log("Фамилии всех пользователей:", arr);
    console.log("--------------------");

    const filteredArr = users.filter((user) =>
      user.last_name.starsWith("F" ? true : false)
    );

    console.log(
      "Данные пользователей с фамилией, начинающейся на 'F':",
      filteredArr
    );

    console.log("--------------------");

    const sentence =
      "Наша база содержит данные следующих пользователей: " +
      users.reduce((acc, user) => {
        return acc + user.first_name + " " + user.last_name + ", ";
      }, "");
    console.log(sentence.slice(0, -2));
    //
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
