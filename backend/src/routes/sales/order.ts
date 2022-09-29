import { FastifyPluginAsync } from "fastify"
import { OrderController } from "../../controllers/sales/order";

const customer: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/order', OrderController.save);
}

export default customer;
