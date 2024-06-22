export default class ProductsService {
  public async productData(data: any) {
    const product = data.product;
    let refactorProduct: any[] = [];
    refactorProduct.push({
      id: product.id,
      shop_id: product.shop_id,
      variant_id: product.product_default_variant.id,
      title: product.title,
      price: product.product_default_variant.price,
      compare_at_price: product.product_default_variant.compare_at_price,
      price_num: product.price,
      compare_num: product.compare_at_price,
      url_image: product.images.map((image: any) => image.url.replace("/", "")),
      description: product.description,
    });

    return refactorProduct;
  }

  public async productsData(data: any) {
    const products = data.products.data;
    let refactorProducts: any[] = [];

    products.forEach((product: any) => {
      refactorProducts.push({
        id: product.id,
        shop_id: product.shop_id,
        variant_id: product.product_default_variant.id,
        title: product.title,
        price: product.product_default_variant.price,
        compare_at_price: product.product_default_variant.compare_at_price,
        price_num: product.price,
        compare_num: product.compare_at_price,
        url_image: product.images.map((image: any) =>
          image.url.replace("/", "")
        ),
        description: product.description,
      });
    });

    return refactorProducts;
  }
}
