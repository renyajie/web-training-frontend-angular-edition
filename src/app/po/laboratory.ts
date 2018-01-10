export class Laboratory {
    constructor(
        public id: number,
        public labName: String,
        public teacherId: number,
        public location: string,
        public imgPath: string,
        public brief: string
    ) {}

    static fromJSON(json: any): Laboratory {
        const lab = Object.create(Laboratory.prototype);
        Object.assign(lab, json);
        return lab;
    }

    toString() {
        return `
        Laboratory {
            id: ${this.id},
            labName: ${this.labName},
            teacherId: ${this.teacherId},
            location: ${this.location},
            imgPath: ${this.imgPath},
            brief: ${this.brief}
        }`;
    }
}
