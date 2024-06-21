import env from "#start/env";
import axios from "axios";

export default class CartsController {
  async create({ request }: any) {
    const body = request.body();

    const options = {
      method: "POST",
      url: `${env.get("SHOP_BASE_URL")}/${env.get("SHOP_SLUG")}/cart`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${env.get("SHOP_TOKEN")}`,
      },
      data: {
        note: "Test Cart",
        discount_code: "Discount",
        discount_category: "manual",
        line_items: body.line_items,
      },
    };

    try {
      const { data } = await axios.request(options);
      return data;
    } catch (error) {
      return error;
    }
  }
}
