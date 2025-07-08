const promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1 started");
    setTimeout(() => {
        resolve("Promise 1 completed");
    }, 3000);
    resolve("Promise 1 resolved");
    reject("Promise "+);
})

// console.log(promise1);

function some(msg, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve("");
        }, time);
    });
}

promise1.then((res) => console.log(res))
.then(() => {
    // return some("P1", 2000);
    setTimeout(() => {
        console.log("P2");
    },2000);
})
.catch((err) => console.error(err));
.then(() => {
    // return some("P2", 1000);
    setTimeout(() => {
        console.log("P3");
    },5000);
})
.catch((err) => console.error(err));
.then(() => {
    // return some("P3", 500);
    setTimeout(() => {
        console.log("P4");
    },1000);
})

.catch((err) => console.error(err));