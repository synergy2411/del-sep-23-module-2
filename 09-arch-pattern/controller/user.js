export class User {
    getUsers() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (resp) { return resp.json() })
            .then(function (result) {
                console.log("RESULT : ", result)
            })
    }
}