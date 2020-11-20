const express = require('express')

const d = require('discord.js')

const c = require('../../config.json')

const app = express()

app.listen(c.internal.bot_port)
