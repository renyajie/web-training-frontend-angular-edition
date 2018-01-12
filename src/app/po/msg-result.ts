export class MessageResult {
    constructor(
        public messageId: number,
        public publishDate: string,
        public title: string,
        public messagePath: string,
        public courseId: number,
        public courseName: string,
        public browTime: number
    ) {}

    static fromJSON(json: any): MessageResult {
        const msg = Object.create(MessageResult.prototype);
        Object.assign(msg, json);
        return msg;
    }

    toString() {
        return `
        MessageResult {
            messageId: ${this.messageId},
            publishDate: ${this.publishDate},
            title: ${this.title},
            messagePath: ${this.messagePath},
            courseId: ${this.courseId},
            courseName: ${this.courseName},
            browTime: ${this.browTime}
        }`;
    }
}
