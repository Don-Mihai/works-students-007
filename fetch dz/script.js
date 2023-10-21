// const getData = async () => { 
//     let isLoading = truetry {
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
    body.data.forEach(element => {
        console.log(element.last_name)
    });
 
    console.log('-----------');
    console.log('Пункт №3:')
    console.log('-----------');
    body.data.filter(item=>item.last_name.startsWith('F')).forEach(element => {
        console.log( element.avatar , element.email , element.first_name , element.id , element.last_name , )
    });

    console.log('-----------');
    console.log('Пункт №4:')
    console.log('-----------');
    console.log(body.data.reduce((acc, item)=>acc + item.first_name + " " + item.last_name +', ', "Наша база содержит данные следующих пользователей: "));
    
    console.log('-----------');
    console.log('Пункт №5:')
    console.log('-----------');
    Object.keys(body).forEach(element=>
        console.log(element)
    );

           
});

        