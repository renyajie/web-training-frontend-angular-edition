export class Message {
    constructor(
        public id: number,
        public publishDate: string,
        public title: string,
        public path: string,
        public publisherId: number,
        public browTime?: number
    ) {}

    static fromJSON(json: any): Message {
        const msg = Object.create(Message.prototype);
        Object.assign(msg, json);
        return msg;
    }

    toString() {
        return `
        Message {
            id: ${this.id},
            publishDate: ${this.publishDate},
            title: ${this.title},
            path: ${this.path},
            browTime: ${this.browTime},
            publisherId: ${this.publisherId}
        }`;
    }
}
