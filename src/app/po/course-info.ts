export class CourseInfo {
    constructor(
        public id: number,
        public courseDescription: string
    ) {}

    static fromJSON(json: any): CourseInfo {
        const course = Object.create(CourseInfo.prototype);
        Object.assign(course, json);
        return course;
    }

    toString() {
        return `
        CourseInfo {
            id: ${this.id},
            courseDescription: ${this.courseDescription}
        }`;
    }
}
