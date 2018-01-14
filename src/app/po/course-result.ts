export class CourseResult {
    constructor(
        public courseId: number,
        public courseName: string,
        public teacherId: number,
        public teacherName: string,
        public startCourseTime: number,
        public endCourseTime: number,
        public weekday: number,
        public startWeek: number,
        public endWeek: number,
        public labId: number,
        public labName: string
    ) {}

    static fromJSON(json: any): CourseResult {
        const courseResult = Object.create(CourseResult.prototype);
        Object.assign(courseResult, json);
        return courseResult;
    }

    toString() {
        return `
        CourseResult {
            courseId: ${this.courseId},
            courseName: ${this.courseName},
            teacherId: ${this.teacherId},
            teacherName: ${this.teacherName},
            startCourseTime: ${this.startCourseTime},
            endCourseTime: ${this.endCourseTime},
            weekday: ${this.weekday},
            startWeek: ${this.startWeek},
            endWeek: ${this.endWeek},
            labId: ${this.labId}
            labName: ${this.labName},
        }`;
    }
}
