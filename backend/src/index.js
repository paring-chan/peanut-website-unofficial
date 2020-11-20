const express = require('express')
const fetch = require('node-fetch')
const config = require('../../config.json')

const postEval = async code => {
    return fetch(`http://127.0.0.1:${config.internal.bot_port}/eval`, {
        method: 'POST',
        body: JSON.stringify({
            code
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json()).then(res=>res.result)
}


const app = express()

app.use(require('cors')())

const chn = '779333506690056212'

app.get('/members', async (req, res) => {
    const data = await postEval(`
    (async () => {
        const chn = client.channels.cache.get('${chn}')
        if (!chn) {
            return []
        }
        
        const messages = (chn.messages.cache.size ? await chn.messages.fetch() : chn.messages.cache)
        
        if (!messages.size) return []
        
        return messages.map(r=> {
            const split = r.content.split('\\n\\n\\n')
            const brief = split.shift()
            return {
                name: r.author.username,
                brief,
                description: split.join('\\n\\n\\n'),
                avatar: r.author.displayAvatarURL({dynamic: true})
            }
        })
    })()
    `)
    res.json(data)
})

app.listen(1234)
