export class ExpDoc {
    constructor(
        public docId: number,
        public docName: string,
        public docUploadTime: string,
        public docSize: number,
        public docLoction: string,
        public stuId: number,
        public stuName: string,
        public courseId: number,
        public courseName: string
    ) {}

    static fromJSON(json: any): ExpDoc {
        const expDoc = Object.create(ExpDoc.prototype);
        Object.assign(expDoc, json);
        return expDoc;
    }

    toString() {
        return `
        ExpDoc {
            docId: ${this.docId},
            docName: ${this.docName},
            docUploadTime: ${this.docUploadTime},
            docSize: ${this.docSize},
            docLoction: ${this.docLoction},
            stuId: ${this.stuId},
            stuName: ${this.stuName},
            courseId: ${this.courseId},
            courseName: ${this.courseName}
        }`;
    }
}
