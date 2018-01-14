export class Course {
    constructor(
        public courseId: number,
        public teacherId: number,
        public startCourseTime: number,
        public endCourseTime: number,
        public weekday: number,
        public startWeek: number,
        public endWeek: number,
        public labId: number
    ) {}

    static fromJSON(json: any): Course {
        const course = Object.create(Course.prototype);
        Object.assign(course, json);
        return course;
    }

    toString() {
        return `
        Course {
            courseId: ${this.courseId},
            teacherId: ${this.teacherId},
            startCourseTime: ${this.startCourseTime},
            endCourseTime: ${this.endCourseTime},
            weekday: ${this.weekday},
            startWeek: ${this.startWeek},
            endWeek: ${this.endWeek},
            labId: ${this.labId}
        }`;
    }
}
