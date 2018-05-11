class Email {
    constructor(email) {
        this.email = email;
    }

    hideEmail() {
        const splittedEmail = this.email.split("@");
        const first3Letters = splittedEmail[0].substr(0, 3);
        const last2Letters = splittedEmail[0].substr(-3);
        
        return `${first3Letters}...${last2Letters}@${splittedEmail[1]}`;
    }
}

export default Email;