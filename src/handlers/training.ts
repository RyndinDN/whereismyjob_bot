import Context from '@/models/Context'
import sendOptions from '@/helpers/sendOptions'
import trainingMenu from '@/menus/training'

export default function handleTraining(ctx: Context) {
  return ctx.replyWithLocalization('training', {
    ...sendOptions(ctx),
    reply_markup: trainingMenu,
  })
}
