import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

/**
 * Plugin for the health check endpoint.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const statusRoute: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get('/status/ping', async (req, _reply) => {
    fastify.log.child({ url: req.url, reqId: req.id }).info('ping');
    for (let i = 0; i < 1000000000; i++) {
      // eslint-disable-next-line no-unused-vars
      const _ = i;
    }
    return { msg: 'pong' };
  });

  done();
};
