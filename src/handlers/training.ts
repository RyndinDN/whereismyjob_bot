import Context from '@/models/Context'
import sendOptions from '@/helpers/sendOptions'

export default function handleTraining(ctx: Context) {
  return ctx.replyWithLocalization('training', sendOptions(ctx))
}
