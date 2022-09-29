import { FastifyReply, FastifyRequest } from 'fastify';
import { ProviderAppService } from '../../services/sales/provider';

export class ProviderController {
    static async save(request: FastifyRequest, reply: FastifyReply) {
        try {
            await ProviderAppService.save(request.body);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async remove(request: FastifyRequest, reply: FastifyReply) {
        try {
            await ProviderAppService.remove(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findById(request: FastifyRequest, reply: FastifyReply) {
        try {
            return await ProviderAppService.findById(request.params);
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async findAll(request: FastifyRequest, reply: FastifyReply) {
        try {
            return await ProviderAppService.findAll();
        } catch (e) {
            reply.code(400);
            return e;
        }
    }

    static async count(request: FastifyRequest, reply: FastifyReply) {
        try {
            return await ProviderAppService.count();
        } catch (e) {
            reply.code(400);
            return e;
        }
    }
}