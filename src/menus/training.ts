import { Menu, MenuRange } from '@grammyjs/menu'
import { cwd } from 'process'
import { load } from 'js-yaml'
import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import Context from '@/models/Context'


const menu = new Menu("dynamic");
menu
  .url("About", "https://grammy.dev/plugins/menu").row()
  .dynamic(() => {
    // Generate a part of the menu dynamically!
    const range = new MenuRange();
    for (let i = 0; i < 3; i++) {
      range
        .text(i.toString(), (ctx) => ctx.reply(`You chose ${i}`))
        .row();
    }
    return range;
  })
  .text("Cancel", (ctx) => ctx.deleteMessage());

export default menu
