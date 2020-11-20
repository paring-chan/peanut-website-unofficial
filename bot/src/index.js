const express = require('express')

const d = require('discord.js')

const c = require('../../config.json')

const app = express()

const client = new d.Client()

app.post('/eval',async (req, res) => {
    res.json({result: await eval(req.body)})
})

app.listen(c.internal.bot_port, '127.0.0.1', () => client.login(c.internal.bot_token))
