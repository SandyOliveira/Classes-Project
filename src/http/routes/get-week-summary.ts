import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSummary } from '../../functions/geet-week-summary'


export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async () => {
    const { summary } = await getWeekSummary()

    return { summary }
  })
}