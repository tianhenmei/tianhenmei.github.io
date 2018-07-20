function Animal(){
    this.name = 'animal'
    this.sleep = function(){
        console.log(this.name+' is sleeping')
    }
    this.info = {
        sex:0
    }
}
Animal.prototype.eat = function(food){
    console.log(this.name+' is eating '+food)
}
Animal.prototype.detail = {
    age:1
}

/**1、原型继承*** */
/*
    function Cat(){

    }
    Cat.prototype = new Animal()
    Cat.prototype.name = 'cat'

    var cat = new Cat()
    console.log(cat.eat('fish'));  // cat is eating fish
    console.log(cat.sleep());  // cat is sleeping
    console.log(cat instanceof Animal); //true 
    console.log(cat instanceof Cat); //true
    cat.detail.age = 4
    console.log('cat is '+cat.detail.age+' years old')  // cat is 4 years old

    Animal.prototype.fight = function(){
        console.log(this.name+' can fight')
    }
    console.log(cat.fight())  // cat can fight

    function Kitty(){

    }
    Kitty.prototype = new Cat()
    Kitty.prototype.name = 'kitty'
    var kitty = new Kitty()
    console.log('this is kitty methods or attributes')
    console.log(kitty.sleep())  // cat is sleeping
    console.log(kitty.eat('mouse'))  // cat is eating mouse


    function Dog(){

    }
    Dog.prototype = new Animal()
    Dog.prototype.name = 'dog'
    var dog = new Dog()
    console.log(dog.sleep())
    console.log(cat.sleep())
    dog.detail.age = 2
    console.log('dog is '+dog.detail.age+' years old')
    console.log('cat is '+cat.detail.age+' years old')
    dog.info.sex = 1
    console.log('dog is a '+dog.info.sex)  // dog is a 1
    console.log('cat is a '+cat.info.sex)  // cat is a 0
    console.log(dog.sleep == cat.sleep) // false
    console.log(dog.eat === cat.eat)   // true
*/

/**2、构造继承 */
/*
    function Cat(name){
        Animal.call(this)
        this.name = name || 'cat'
    }
    // Test Code
    var cat = new Cat();
    console.log(cat.name);  // cat
    console.log(cat.sleep());  // cat is sleeping
    console.log(cat.eat)  // undefined
    console.log(cat instanceof Animal); // false
    console.log(cat instanceof Cat); // true

    function Kitty(name){
        Cat.call(this)
        this.name = name || 'kitty'
    }
    var kitty = new Kitty('kitty')
    console.log(kitty.sleep())  // kitty is sleeping

    function Dog(name){
        Animal.call(this)
        this.name = name || 'dog'
    }
    var dog = new Dog()
    dog.info.sex = 1
    console.log('dog is a '+dog.info.sex)  // dog is a 1
    console.log('cat is a '+cat.info.sex)  // cat is a 0

    console.log(dog.sleep == cat.sleep)  // false
*/

/**3、实例继承 */
/*
    function Cat(name){
        var instance = new Animal()
        instance.name = name
        return instance
    }
    // Test Code
    var cat = new Cat('cat');
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat.eat())  // cat is eating undefined
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat); // false

    function Dog(name){
        var instance = new Animal()
        instance.name = name
        return instance
    }
    var dog = new Dog('dog')
    dog.detail.age = 2
    console.log(dog.detail.age)
    console.log(cat.detail.age)
    dog.info.sex = 1
    console.log(dog.info.sex)  // 1
    console.log(cat.info.sex)  // 0

    function Kitty(name){
        var instance = new Cat()
        instance.name = name
        return instance
    }
    var kitty = new Kitty('kitty')
    console.log(kitty.sleep())
    console.log(kitty.eat('fish'))
*/

/**4、拷贝继承 */
/*
    function Cat(name){
        var animal = new Animal()
        for(var p in animal){
            Cat.prototype[p] = animal[p]
        }
        Cat.prototype.name = name
    }
    var cat = new Cat('choulaogong')
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // false
    console.log(cat instanceof Cat); // true

    function Dog(name){
        var animal = new Animal()
        for(var p in animal){
            Dog.prototype[p] = animal[p]
        }
        Dog.prototype.name = name
    }
    var dog = new Dog('dagou')
    dog.detail.age = 2
    console.log(dog.detail.age)
    console.log(cat.detail.age)
    dog.info.sex = 1
    console.log(dog.info.sex)  // 1
    console.log(cat.info.sex)  // 0
*/
/**5、组合继承 */
/*
    function Cat(name){
        Animal.call(this)
        this.name = name || 'cat'
    }
    Cat.prototype = new Animal()
    var cat = new Cat()
    console.log(cat.name);
    console.log(cat.sleep());  // cat is sleeping
    console.log(cat.eat('fish'));  // cat is eating fish
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat); // true
    console.log(cat)
    function Dog(name){
        Animal.call(this)
        this.name = name || 'dog'
    }
    Dog.prototype = new Animal()
    var dog = new Dog()
    dog.detail.age = 2
    console.log(dog.detail.age)  // 2
    console.log(cat.detail.age)  // 2
    dog.info.sex = 1
    console.log(dog.info.sex)  // 1
    console.log(cat.info.sex)  // 0
*/

/**6、寄生组合继承 */
// /*
    function Cat(name){
        Animal.call(this)
        this.name = name || 'cat'
    }
    (function(){
        // 创建一个没有实例方法的类
        var Super = function(){};
        Super.prototype = Animal.prototype;
        //将实例作为子类的原型
        Cat.prototype = new Super();
    })();
    var cat = new Cat()
    console.log(cat)
    console.log(cat.name);
    console.log(cat.sleep());
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof Cat); //true
    console.log(cat)
    console.log(cat.prototype)
    function Dog(name){
        Animal.call(this)
        this.name = name || 'dog'
    }
    (function(){
        // 创建一个没有实例方法的类
        var Super = function(){};
        Super.prototype = Animal.prototype;
        //将实例作为子类的原型
        Dog.prototype = new Super();
    })();
    var dog = new Dog()
    dog.detail.age = 2
    console.log(dog.detail.age)  // 2
    console.log(cat.detail.age)  // 2
    dog.info.sex = 1
    console.log(dog.info.sex)  // 1
    console.log(cat.info.sex)  // 0
// */