export class Todo
{
    public id : number;
    public content : string;
    public completed : boolean;

    constructor(content : string, completed: boolean) {
        this.content = content;
        this.completed = completed;
    }
}