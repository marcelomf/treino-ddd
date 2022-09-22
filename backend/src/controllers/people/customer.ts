import { FastifyReply, FastifyRequest } from 'fastify';
import { CustomerAppService } from '../../services/people/customer';

export class CustomerController {
    static async save(request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerAppService.save(request.body);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async remove(request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerAppService.remove(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findById(request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerAppService.findById(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findAll(request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerAppService.findAll();
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async count(request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerAppService.count();
        } catch (e) {
            reply.code(400);
            return e;
        }
    }
}