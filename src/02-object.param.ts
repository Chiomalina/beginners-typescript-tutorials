
interface params {
    first: number
    second: number
}

export const addTwoNumbers = (params: params) => {
    return params.first + params.second;
}

console.log(addTwoNumbers({first: 2, second: 10}))