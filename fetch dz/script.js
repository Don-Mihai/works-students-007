// const getData = async () => { 
//     let isLoading = true
//     try {
//         const data = await fetch("https://reqres.in/api/users?per_page=12")
//         const procData = await data.json()

//         console.log(procData)

//     } catch (error) {
//         console.log("ошибка" , error)
//     }

//     isLoading = false
// }

// getData


// let isLoading = true

// fetch("https://reqres.in/api/users?per_page=12")
//         .then(data => {
//             return data.json()
//         })
//         .then(procData => {
//               console.log(procData)
//         })
//         .catch((error) => {
//             console.log("ошибка" , error)
//         })
//         .finally(() => {
//             isLoading = false
//         })

fetch('https://reqres.in/api/users?per_page=12')
.then((response) => {
    console.log(response);
    return response.json();
}).then((body) => {
    
    console.log('-----------');
    console.log('Пункт №1:')
    console.log('-----------');
    console.log(body);
    
    console.log('-----------');
    console.log('Пункт №2:')
    console.log('-----------');
    const users = body.data

    users.forEach(element => {
        console.log(element.last_name)
    });
 
    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    const filteredArr = users.filter(item=>item.last_name.startsWith('F'))

    console.log(filteredArr)

    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(users.reduce((acc, item)=>acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей: "));
    
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(body).forEach(element=>
        console.log(element)
    );

           
});

        