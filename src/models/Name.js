class Name {
    constructor(title, first, last) {
        this.title = title;
        this.first = first.charAt(0).toUpperCase() + first.slice(1);
        this.last = last.charAt(0).toUpperCase() + last.slice(1);
    }

    getFirstName() {
        return this.first;
    }

    getFullName() {
        return `${this.first} ${this.last}`;
    }
}

export default Name;