import { collections } from 'store/mongodb.tsx'
import { ObjectId } from "mongo";

export default class Chat {
    created = null
    name = 'Chat'
    message = 'Says nothing'
    request = null

    constructor({name, message, request, _id, created}) {
        this.created = new Date(created || Date.now())
        this.name = name || this.name
        this.message = message || this.message
        this.request = request || {}
        if (_id) {
             this._id = new ObjectId(_id)
        }
    }

    async save() {
        if (collections) {
            await this.refresh(await collections.collection('chats').insertOne(this))
        } else {
            console.log('not saved')
        }
        return this
    }

    async previous(limit=10) {
        if (collections) {
            // {created: {'$lte': new Date(this.created)}, })
            return await collections.collection('chats').find({created: {$lte: new Date(this.created)}, _id: {'$ne':this._id}}, {projection: {request: 0}}).sort({created: -1}).limit(limit).toArray();
        } else {
            console.log('not recieved')
        }
        return []
    }

    async refresh (id) {
        if (collections) {
            const {name, message, created, _id} = await collections.collection('chats').findOne({_id: id || this._id}, {projection: {request: 0}})
            this.name = name
            this.message = message
            this.created = created
            this._id = _id
        } else {
            console.log('not getted')
        }
        return this
    }
}
