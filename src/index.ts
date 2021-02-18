// FACTORY METHOD PATTERN

class Person {

}

class Employee {
    
    floors:number[] = [1, 3, 4];

    constructor( person:Person ){

    }

}

class Programmer extends Employee {

}

class Accountant extends Employee {

}

abstract class Department {

    floors:number[];
    
    public abstract hire( person:Person ): Employee;

}

class ITDepartment extends Department {

    floors:number[] = [1, 3, 4];

    public hire( person:Person ): Programmer {
        const programmer = new Programmer( person );
        programmer.floors = this.floors;
        return programmer;
    }

}

class AccountingDepartment extends Department {

    floors:number[] = [1, 3, 7];
    
    public hire( person:Person ): Accountant {
        return new Accountant( person );
    }

}


// setup
const itDep = new ITDepartment();
const accDep = new AccountingDepartment();

// applicants
const joe = new Person();
const gerry = new Person();
const sarah = new Person();
const janice = new Person();

//hire
itDep.hire(sarah);
accDep.hire(joe);