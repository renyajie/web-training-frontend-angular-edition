export class ExpDocReqForStudent {
    constructor(
        public requirementId: number,
        public requirementTitle: string,
        public publishDate: string,
        public deadline: string,
        public courseId: number,
        public courseName: string,
        public teacherId: number,
        public teacherName: string
    ) {}

    static fromJSON(json: any): ExpDocReqForStudent {
        const expDocReq = Object.create(ExpDocReqForStudent.prototype);
        Object.assign(expDocReq, json);
        return expDocReq;
    }

    toString() {
        return `
        ExpDocReqForStudent {
            requirementId: ${this.requirementId},
            requirementTitle: ${this.requirementTitle},
            publishDate: ${this.publishDate},
            deadline: ${this.deadline},
            courseId: ${this.courseId},
            courseName: ${this.courseName},
            teacherId: ${this.teacherId},
            teacherName: ${this.teacherName}
        }`;
    }
}
