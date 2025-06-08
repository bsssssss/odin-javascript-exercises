const findTheOldest = function (array) {
    function calcAge(birth, death) {
        if (death == undefined) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
    return array.reduce((prev, next) => {
        const prevAge = calcAge(prev.yearOfBirth, prev.yearOfDeath);
        const nextAge = calcAge(next.yearOfBirth, next.yearOfDeath);
        if (prevAge < nextAge) return next;
        else return prev;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
