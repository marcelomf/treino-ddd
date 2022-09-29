import { FastifyPluginAsync } from "fastify"
import { CustomerController } from "../../controllers/sales/customer";

const customer: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/customer', CustomerController.save);
  fastify.put('/customer', CustomerController.save);
  fastify.delete('/customer/:id', CustomerController.remove);
  fastify.get('/customer/:id', CustomerController.findById);
  fastify.get('/customer/all', CustomerController.findAll);
  fastify.get('/customer/count', CustomerController.count);
}

export default customer;
