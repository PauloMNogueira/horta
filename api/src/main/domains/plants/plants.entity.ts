export class Plants {
    id: number;
    name: string;
    description: string;

    constructor(input: {
        id?: number,
        name: string,
        description: string
    }) {
        this.id = input.id ?? 0;
        this.name = input.name;
        this.description = input.description;
    }
}