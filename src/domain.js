let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

pronoun.forEach(proun => {
    adj.forEach(ad => {
        noun.forEach(no => {
            console.log(proun + ad + no + ".com");
        });
    });
});

