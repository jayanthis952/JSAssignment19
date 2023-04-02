function job() {
    return new Promise(function(resolve, reject) {
    reject();
    });
    }
    let promise = job();
    promise
    .then(function() {
    console.log('Success 1');
    })
    .then(function() {
    console.log('Success 2');
    })
    .then(function() {
    console.log('Success 3');
    })
    .catch(function() {
    console.log('Error 1');
    })
    .then(function() {
    console.log('Success 4');
    });

    //output
    //Error 1
    //Success 4

// The job function returns a new Promise that immediately rejects.
// The promise variable is assigned the Promise returned by the job function.
// The first then block is attached to the Promise chain, but it will not execute because the Promise was rejected.
// The catch block is executed because the Promise was rejected, and it logs 'Error 1'.
// The second then block is attached to the Promise chain, but it will not execute because the previous block rejected the Promise.
// The third then block is attached to the Promise chain, but it will not execute because the previous block rejected the Promise.
// The fourth then block is attached to the Promise chain, and it will execute because it is not affected by the rejection of the previous Promise. It logs 'Success 4'.
