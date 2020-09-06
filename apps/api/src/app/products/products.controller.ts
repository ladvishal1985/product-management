import { ProductsService } from './products.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from '@product-management/api-interfaces';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('products')
  getProducts(): Product[] {
    return this.productsService.getProducts();
  }
  @Post('products')
  addProductData(@Body() product: Product): Product {
    return this.productsService.addProduct(product);
  }
}
