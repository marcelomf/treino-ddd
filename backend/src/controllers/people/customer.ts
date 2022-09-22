import { FastifyReply, FastifyRequest } from 'fastify';
import { CustomerService } from '../../services/people/customer';

export class CustomerController {
    static async save (request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerService.save(request.body);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async remove (request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerService.remove(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findById (request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerService.findById(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findAll (request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerService.findAll();
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async count (request: FastifyRequest, reply: FastifyReply) {
        try {
            return CustomerService.save(request.body);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }
}