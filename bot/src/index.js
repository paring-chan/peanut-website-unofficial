const express = require('express')

const d = require('discord.js')

const c = require('../../config.json')

const app = express()

const client = new d.Client()

app.use(express.json())

app.post('/eval',async (req, res) => {
    let rst
    try {
        rst = await eval(req.body.code)
    } catch (e) {
        rst = null
    }
    console.log(rst)
    res.json({result: rst})
})

app.listen(c.internal.bot_port, '127.0.0.1', () => client.login(c.internal.bot_token))

process.on('unhandledRejection', e => console.error(e.message))
