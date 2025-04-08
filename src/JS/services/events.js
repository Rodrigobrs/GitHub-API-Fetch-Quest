import { baseUrl, eventsQuantity } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const array = await response.json()

    console.log(array)

    let lista = []

    array.forEach((index) => {
        if (lista.length < eventsQuantity && (index.type === 'PushEvent' || index.type === 'CreateEvent')) {
            lista.push(index)
        }
    })

    return lista
}

export { getEvents }