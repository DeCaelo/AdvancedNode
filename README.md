# AdvancedNodeStarter

Starting project for a course on Advanced Node @ Udemy

#### 83. Inner Workings of Sessions:

```js
node
> const session = 'eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWFhYjljYzE2ZjY1MTQzNzA4YjMzNGUyIn19'
undefined
> const Buffer = require('safe-buffer').Buffer
undefined
> Buffer.from(session, 'base64').toString('utf8')
'{"passport":{"user":"5aab9cc16f65143708b334e2"}}' // === req.session
```
