class Mouse {
    constructor() {
        this.name = '';
        this.weight = '';
        this.speed = '';
        this.isLive = true;
    }

    cry () {
        alert('Chit chit');
    }
    getSpeed () {
        return this.speed;
    }
    setSpeed (speed) {
        this.speed = speed;
    }
    getIsLive () {
        return this.isLive;
    }
    setIsLive (islive) {
        this.isLive = islive;
        this.weight = 0;
    }
    getWeight () {
        return this.weight;
    }
    setWeight (weight) {
        this.weight = weight;
    }
    killMouse () {
        this.isLive = false;
    }
}