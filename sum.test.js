// import method 
const myTesting = require("./sum")

// 1st test case 
test("return the num",()=>{

    expect(myTesting(10)).toBe(10)
})
//2nd test case 
test("return the num+numb2",()=>{

    expect(myTesting(10,20)).toBe(30)
})
// third test case 

test("return the num+numb2+num3",()=>{

    expect(myTesting(10,20,50)).toBe(80)
})
// forth test case 

test("return the num+numb2+num3+numb4",()=>{

    expect(myTesting(10,20,50,100)).toBe(180)
})
// fifth test case 
test("return 0 if no number",()=>{

    expect(myTesting(0)).toBe(0)
})