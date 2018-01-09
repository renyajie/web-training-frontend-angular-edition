export class News {
    constructor(
        public id: number,
        public publishDate: Date,
        public title: string,
        public path: string,
        public browTime?: number, ) {}

    static fromJSON(json: any): News {
        const news = Object.create(News.prototype);
        Object.assign(news, json);
        return news;
    }

    toString() {
        return `
        News {
            id: ${this.id},
            publishDate: ${this.publishDate},
            title: ${this.title},
            path: ${this.path},
            browTime: ${this.browTime}
        }`;
    }
}
