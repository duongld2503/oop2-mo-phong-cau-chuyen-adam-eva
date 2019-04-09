function Apple(weight) {
    this.weight = weight;

    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.decrease = function (weight) {
        this.weight--;
    }

    this.isEmpty = function () {
            document.write("het tao")
    }

    
}

function Human(name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.setName = function (name) {
        this.name = name;
    }
    this.setGender = function (gender) {
        this.gender = gender;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.getName = function () {
        return this.name;
    }
    this.getGender = function () {
        return this.gender;
    }
    this.getWeight = function () {
        return this.weight;
    }

    this.talk = function () {
        console.log("hi my name is " + name)
    }

    this.eat = function (weightA,id) {
        if (weightA > 0) {
            tao.decrease(weightA);
            weight++;
        } else if (weightA == 0){
            tao.isEmpty();
        }
            document.getElementById(id).innerHTML = weightA;
    }
}

let tao = new Apple(10);
let Adam = new Human('adam','male',70);

// Adam.talk();
// Adam.eat(tao.getWeight());
// console.log(tao.getWeight());
// Adam.getWeight();