import client from './client';

const send = async (message, listingId) => {
    return await client.post('/messages', {
        message,
        listingId,
    })
}

const messagesApi = {
    send,
}

export default messagesApi


