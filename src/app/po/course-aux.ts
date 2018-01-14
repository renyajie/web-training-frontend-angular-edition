export class CourseAux {
    constructor(
        public isOccupied: boolean = false,
        public rowSpan: number = 1,
        public rowOne: string = '',
        public rowTwo: string = '',
        public rowThree: string = '',
        public rowFour: string = ''
    ) {}

    static fromJSON(json: any): CourseAux {
        const courseAux = Object.create(CourseAux.prototype);
        Object.assign(courseAux, json);
        return courseAux;
    }

    toString() {
        return `
        CourseAux {
            isOccupied: ${this.isOccupied},
            rowSpan: ${this.rowSpan},
            rowOne: ${this.rowOne},
            rowTwo: ${this.rowTwo},
            rowThree: ${this.rowThree},
            rowFour: ${this.rowFour},
        }`;
    }
}
