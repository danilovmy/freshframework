export default class ChatModel {
    created = null;
    _id = null;
    name = 'Chat';
    message = 'Says nothing';

    constructor({created, _id, message, name}) {
        this.created = created || new Date(Date.now());
        this._id = _id;
        this.message = message;
        this.name = name;
    };

    async reload(limit=10) {
        return await fetch(`/api/messages/?${new URLSearchParams({limit: limit, created: this.created, _id:this._id}).toString()}`);
    };

    static parse (response) {
        return new ChatModel(JSON.parse(response.data));
    };
};
