class Cat {
    constructor() {
        this.name = '';
        this.weight = '';
        this.speed = '';
        this.speedMax = 20;
        this.isCatchedMouse = false;
    }

    cry() {
        alert('Meo meo');
    }
    getWeight () {
        return this.weight;
    }
    setWeight (weight) {
        this.weight = weight;
    }
    getSpeed () {
        return this.speed;
    }
    setSpeed (speed) {
        if (speed < this.speedMax) {
            this.speed = speed;
        } else {
            alert('Speed max is 20');
        }
    }
    getIsCatchedMouse () {
        return this.isCatchedMouse;
    }
    setIsCatchedMouse (isCatchedMouse) {
        this.isCatchedMouse = isCatchedMouse;
    }
    catchMouse (mouse) {
        let mouseSpeed = mouse.getSpeed();
        if (mouseSpeed < this.speed) {
            this.setIsCatchedMouse(true);
            mouse.setIsLive(true);
            alert('Congratulation! Catched mouse :)');
        } else {
            alert("Poor you :( Can't catch mouse. Please crease cat's speed!");
        }
    }
    eatMouse (mouse) {
        let isLive = mouse.getIsLive();
        let mouseWeight = mouse.getWeight();
        if (this.isCatchedMouse) {
            if (isLive) {
                this.setWeight(this.weight + mouseWeight);
                document.getElementById('weight-cat').innerHTML = this.weight;
                document.getElementById('weight-mouse').innerHTML = "No more mouse";
                this.setIsCatchedMouse(false);
                mouse.setIsLive(false);
            } else {
                alert("Poor you :( Mouse is died..");
                this.setIsCatchedMouse(false);
                mouse.setIsLive(false);
            }
        } else {
            alert("Please catch mouse first!");
        }
    }
}