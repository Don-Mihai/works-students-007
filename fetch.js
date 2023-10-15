// const getData = async () => {
//     let isLoading = true
//     try {
//         const data = await fetch('https://645f57d47da4477ba9554f96.mockapi.io/users')
//         const procData = await data.json()
//         console.log(procData)
//     } catch (error) {
//         console.log('Ошибка', error)
//     }

//     isLoading = false

// }

// getData()

//---------------------------------

// let isLoading = true

// fetch('https://645f57d47da4477ba9554f96.mockapi.io/users')
//     .then(data => {
//         return data.json();
//     })
//     .then(procData => {
//         console.log(procData)
//     })
//     .catch((error) => {
//         console.log('Ошибка', error)
//     })
//     .finally(() => {
//         isLoading = false
//     })

//---------------------------------------