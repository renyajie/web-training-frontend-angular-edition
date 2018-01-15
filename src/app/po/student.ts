export class Student {
    constructor(
        public stuId: number,
        public passwd: string,
        public stuName?: String,
        public phone?: string,
        public classInfo?: string,
        public gender?: string,
        public birth?: string,
        public major?: String,
        public email?: String
    ) {}

    static fromJSON(json: any): Student {
        const student = Object.create(Student.prototype);
        Object.assign(student, json);
        return student;
    }

    toString() {
        return `
        Student {
            stuId: ${this.stuId},
            stuName: ${this.stuName},
            passwd: ${this.passwd},
            phone: ${this.phone},
            classInfo: ${this.classInfo},
            gender: ${this.gender},
            birth: ${this.birth},
            major: ${this.major},
            email: ${this.email}
        }`;
    }
}
