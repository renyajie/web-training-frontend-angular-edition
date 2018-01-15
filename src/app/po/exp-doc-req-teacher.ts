export class ExpDocReqForTeacher {
    constructor(
        public id: number,
        public teacherId: number,
        public courseId: number,
        public publishDate: string,
        public deadline: string,
        public title: string,
        public info: string
    ) {}

    static fromJSON(json: any): ExpDocReqForTeacher {
        const expDocReq = Object.create(ExpDocReqForTeacher.prototype);
        Object.assign(expDocReq, json);
        return expDocReq;
    }

    toString() {
        return `
        ExpDocReqForTeacher {
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
