import { baseUrl } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events`)
    const json = await response.json()

    const onlyCreateAndPushEvents = json.filter((events) => events.type == 'PushEvent' || events.type == 'CreateEvent')

    let tenLastCreateAndPushEvents = []
    onlyCreateAndPushEvents.forEach(function (event,ind) {
        if (ind < 10){
            tenLastCreateAndPushEvents.push(event)
        }
    });

    return tenLastCreateAndPushEvents
}

export { getEvents }