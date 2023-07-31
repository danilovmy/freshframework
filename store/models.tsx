import { collections } from 'store/mongodb.tsx'

export default class Chat {
    created = null
    name = 'Chat'
    message = 'Says nothing'
    request = null

    constructor({name, message, request, _id}) {
        this.created = new Date(Date.now())
        this.name = name || this.name
        this.message = message || this.message
        this.request = request || {}
        if (_id) {
             this._id = _id
        }
    }

    save() {
        if (collections) {
            return collections.collection('chats').insertOne(this);
        } else {
            console.log('not saved')
        }
    }

}
