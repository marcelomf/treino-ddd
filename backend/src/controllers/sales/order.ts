import { FastifyReply, FastifyRequest } from 'fastify';
import { OrderAppService } from '../../services/sales/order';

export class OrderController {
    static async save(request: FastifyRequest, reply: FastifyReply) {
        try {
            await OrderAppService.save(request.body);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }
}