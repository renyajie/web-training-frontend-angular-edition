export class Teacher {
    constructor(
        public teacherId: number,
        public passwd: string,
        public teacherName?: String,
        public phone?: string,
        public job?: string,
        public gender?: string,
        public birth?: string,
        public office?: String,
        public major?: String,
        public email?: String
    ) {}

    static fromJSON(json: any): Teacher {
        const teacher = Object.create(Teacher.prototype);
        Object.assign(teacher, json);
        return teacher;
    }

    toString() {
        return `
        Teacher {
            teacherId: ${this.teacherId},
            teacherName: ${this.teacherName},
            passwd: ${this.passwd},
            phone: ${this.phone},
            job: ${this.job},
            gender: ${this.gender},
            job: ${this.job},
            birth: ${this.birth},
            office: ${this.office},
            major: ${this.major},
            email: ${this.email}
        }`;
    }
}
