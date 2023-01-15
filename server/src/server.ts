import Fastify from 'fastify';
import cors from '@fastify/cors';
import { poolRoutes } from './pool';
import { userRoutes } from './user';
import { guessRoutes } from './guess';
import { authRoutes } from './auth';
import { gameRoutes } from './game';
import jwt from '@fastify/jwt';



async function bootstrap() {
    const fastify = Fastify({
        logger: true,
    });

    await fastify.register(cors, {
        origin: true,
    });

    // em produção isso precisa ser uma variavel de ambiente
    await fastify.register(jwt, {
        secret: 'nlwcopa',
    })

    await fastify.register(poolRoutes);
    await fastify.register(authRoutes);
    await fastify.register(gameRoutes);
    await fastify.register(guessRoutes);
    await fastify.register(userRoutes);

    await fastify.listen({ port: 3333, /*host: '0.0.0.0'*/ });  // host (android)
}

bootstrap();
