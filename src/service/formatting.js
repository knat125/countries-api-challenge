export const populationFormatting = (amount) => {
    return amount.toString().length > 3 ? amount.toString().split("").reverse().join("").match(/.{1,3}/g).join(",").split("").reverse().join("") : amount;
} 