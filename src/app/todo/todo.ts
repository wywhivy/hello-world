export class Todo {
    _id: string;
    title: string;
    isFinished: boolean;

    constructor(title: string, isFinished: boolean) {
        this.title = title;
        this.isFinished = isFinished;
    }
}