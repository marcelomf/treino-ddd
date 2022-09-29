import { FastifyPluginAsync } from "fastify"
import { ProviderController } from "../../controllers/sales/provider";

const provider: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/provider', ProviderController.save);
  fastify.put('/provider', ProviderController.save);
  fastify.delete('/provider/:id', ProviderController.remove);
  fastify.get('/provider/:id', ProviderController.findById);
  fastify.get('/provider/all', ProviderController.findAll);
  fastify.get('/provider/count', ProviderController.count);
}

export default provider;
