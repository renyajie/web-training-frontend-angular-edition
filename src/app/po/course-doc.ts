export class CourseDoc {
    constructor(
        public courseDocId: number,
        public docId: number,
        public fileName: string,
        public uploadTime: string,
        public size: number,
        public fileType: string,
        public location: string,
        public courseId: number,
        public courseName: string
    ) {}

    static fromJSON(json: any): CourseDoc {
        const courseDoc = Object.create(CourseDoc.prototype);
        Object.assign(courseDoc, json);
        return courseDoc;
    }

    toString() {
        return `
        CourseDoc {
            courseDocId: ${this.courseDocId},
            docId: ${this.docId},
            fileName: ${this.fileName},
            uploadTime: ${this.uploadTime},
            size: ${this.size},
            location: ${this.location},
            fileType: ${this.fileType},
            courseId: ${this.courseId},
            courseName: ${this.courseName}
        }`;
    }
}
