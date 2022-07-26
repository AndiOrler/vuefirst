

export class Test {

    static foo() {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(json => console.log(json))
    }



}