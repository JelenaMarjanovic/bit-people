class Picture {
    constructor(large, medium, thumbnail) {
        this.large = large;
        this.medium = medium;
        this.thumbnail = thumbnail;
    }

    getThumbnail() {
        return this.thumbnail;
    }

    getMedium() {
        return this.medium;
    }

    getLarge() {
        return this.large;
    }
}

export default Picture;