const getAverage = (arr) => {
    const sum=arr.reduce((a,b)=>a+b,0)
    return sum/arr.length
}

export default getAverage