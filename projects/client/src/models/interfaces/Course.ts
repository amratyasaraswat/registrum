export default class Course {
    term: number
    subject: string
    number: number

    constructor(term: number, subject: string, number: number) {
        this.number = number
        this.term = term
        this.subject = subject
    }
}
