// import type { HttpContext } from '@adonisjs/core/http'
import ProductsService from "#services/product_service";
import env from "#start/env";
import { HttpContext } from "@adonisjs/core/http";
import axios from "axios";

export default class ProductsController {
  async show() {
    const options = {
      method: "GET",
      url: `${env.get("SHOP_BASE_URL")}/${env.get("SHOP_SLUG")}/products`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.get("SHOP_TOKEN")}`,
      },
    };

    try {
      const { data } = await axios.request(options);
      const productsService = new ProductsService();
      const processedData = await productsService.productsData(data);
      return processedData;
    } catch (error) {
      console.error(error);
    }
  }

  async productById({ params }: HttpContext) {
    const options = {
      method: "GET",
      url: `${env.get("SHOP_BASE_URL")}/${env.get("SHOP_SLUG")}/products/${
        params.id
      }`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${env.get("SHOP_TOKEN")}`,
      },
    };

    try {
      const { data } = await axios.request(options);
      const productsService = new ProductsService();
      const processedData = await productsService.productData(data);
      return processedData;
    } catch (error) {
      console.error(error);
    }
  }
}
