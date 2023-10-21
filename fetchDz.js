async function getUsersData() {
    try {
        // Пункт 1: Получить данные всех пользователей
        const response = await fetch('https://reqres.in/api/users?per_page=12');
        const data = await response.json();
        const users = data.data;
        console.log(data)

        console.log('-----------');
        // Пункт 2: Вывести фамилии всех пользователей в цикле

        // const arr = []
        // for (const user of users) {
        //     arr.push(user.last_name)
        // }

        const arr = users.map((user) => user.last_name)


        console.log('Вывести фамилии всех пользователей в цикле:', arr);
        console.log('-----------');


       

        // Пункт 3: Вывести все данные пользователей, фамилия которых начинается с "F"
        // for (const user of users) {
        //     if (user.last_name.startsWith('F')) {
        //         console.log(user);
        //     }
        // }

        const filteredArr = users.filter((user) => user.last_name.startsWith('F') ? true : false )

        console.log('Вывести все данные пользователей, фамилия которых начинается с "F":', filteredArr);
        console.log('-----------');

        console.log('Вывести имена и фамилии всех пользователей с использованием метода reduce');
        console.log('-----------');

        // Пункт 4: Вывести имена и фамилии всех пользователей с использованием метода reduce
        const allUserData = users.reduce((acc, user) => {
            return acc + user.first_name + ' ' + user.last_name + ', ';
        }, 'Наша база содержит данные следующих пользователей: ');

        console.log(allUserData.slice(0, -2)); // Убираем последнюю запятую и пробел

        console.log('-----------');
        console.log('Вывести названия всех ключей в объекте пользователя:');
        console.log('-----------');

        // Пункт 5: Вывести названия всех ключей в объекте пользователя
        const userKeys = Object.keys(users[0]);
        console.log(userKeys);
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
    }
}

getUsersData();
