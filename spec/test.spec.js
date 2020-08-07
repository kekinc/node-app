// import { describe } from "mocha";

describe("Begin",()=>{
    it("should pass the test case.", (done)=>{
        expect(true).toBeTruthy();
        done();
    });
    
    it("should pass the second test case.", (done)=>{
        expect(false).toBeFalsy();
        done();
    })
})
