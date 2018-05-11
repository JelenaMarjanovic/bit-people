class Dob {
    constructor(dob) {
        this.dob = new Date(dob);
    }

    formatDate() {
        let date = this.dob.getDate();
        if (date < 10) {
            date = `0${date}`;
        }

        let month = this.dob.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }

        const year = this.dob.getFullYear();

        return `${date}.${month}.${year}.`;
    }
}

export default Dob;