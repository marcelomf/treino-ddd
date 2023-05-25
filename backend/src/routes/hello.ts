import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify"

const hello: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/hello', function hello(request: FastifyRequest, reply: FastifyReply) {
        return "Hello World!"
    });
}

export default hello;
