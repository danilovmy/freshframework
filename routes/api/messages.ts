import ChatModel from 'store/backendmodels.tsx'

export const handler = {
    async GET(request, context) {
        const querystring = (new URL(request.url)).searchParams
        const chat = new ChatModel(Object.fromEntries(querystring.entries()))
        let data = {}
        try {
            data = await chat.previous(querystring.limit)
        } catch (error) {
            console.log(error)
        }
        return new Response(JSON.stringify(data));
    }
}