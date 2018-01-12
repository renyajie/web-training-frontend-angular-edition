export class ExpDocReq {
    constructor(
        public id: number,
        public teacherId: number,
        public courseId: number,
        public publishDate: string,
        public deadline: string,
        public title: string,
        public info: string
    ) {}

    static fromJSON(json: any): ExpDocReq {
        const expDocReq = Object.create(ExpDocReq.prototype);
        Object.assign(expDocReq, json);
        return expDocReq;
    }

    toString() {
        return `
        ExpDocReq {
            id: ${this.id},
            teacherId: ${this.teacherId},
            courseId: ${this.courseId},
            publishDate: ${this.publishDate},
            deadline: ${this.deadline},
            title: ${this.title},
            info: ${this.info}
        }`;
    }
}
