const {loginClient} = require("../scripts/client-login");
jest.setTimeout(20000); 
 
describe('test for client login ', () => {
    
    
    test('should get the jwt when valid credentials are shared',  async () => {
        var obj={};
            
        obj.email="naveen@naveen.com";
        obj.password="naveen1234"
        obj.pic="/pic.jpg";
        let message =  await loginClient(obj); 
        expect(message.message).toEqual("User authorization successful")
    })
})
