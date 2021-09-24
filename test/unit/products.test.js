const productController = require('../../controller/products');
const productModel = require('../../models/Product')

productModel.create = jest.fn();

describe("Product Controller Create",()=>{
    test("should have a createProduct function", ()=>{
        expect(typeof productController.createProduct).toBe("function");    // productController.createProduct 함수가 존재하는 지
    });
    test("should call productmodel.create", () => {
        productController.createProduct();          // createProduct 메소드가 호출될 때 이 메소드 안에서
        expect(productModel.create).toBeCalled();   // productModel.create가 호출이 되는 지
    })
});