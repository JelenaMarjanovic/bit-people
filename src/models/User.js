import Picture from './Picture';
import Name from './Name';
import Email from './Email';
import Dob from './Dob';

class User {
    constructor(picture, name, email, dob, gender) {
        this.picture = new Picture(picture.large, picture.medium, picture.thumbnail);
        this.name = new Name(name.title, name.first, name.last);
        this.email = new Email(email);
        this.dob = new Dob(dob);
        this.gender = gender;
    }

    getPicture() {
        return this.picture.getLarge();
    }

    getFullName() {
        return this.name.getFullName();
    }

    getFirstName() {
        return this.name.getFirstName();
    }

    getEmail() {
        return `${this.email.hideEmail()}`;
    }

    getDob() {
        return `${this.dob.formatDate()}`;
    }

    getGender() {
        if (this.gender === 'female') {
            return 'card red lighten-5';
        } else {
            return 'card';
        }
    }
}

export default User;