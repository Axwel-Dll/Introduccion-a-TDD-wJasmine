//: devuelve la suma del número más grande y el más pequeño del array
function sumMaxMin(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = arr[0] + arr[arr.length -1];
    }
    return sum;
}
sumMaxMin([1,2,3,4]);
   
describe("sumMaxMin", function() { 
    it("deberia retornar 11 cuando envio [1,3,10]", function() { 
        expect(sumMaxMin([1,3,10])).toEqual(11); 
    }); 
    it("deberia retornar -12 cuando envio [-2,-5,-10]", function() { 
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12); 
    });   
});

