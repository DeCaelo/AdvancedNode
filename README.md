# Advanced Node

* Learn caching with Redis.
* Continuous Integration with TravisCI.
* add image upload with S3 and Node.

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

#### 85. Session Signatures:

```js
node
> const session = 'eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNWFhYjljYzE2ZjY1MTQzNzA4YjMzNGUyIn19'
undefined
> const Keygrip = require('keygrip')
undefined
> const keygrip = new Keygrip(['123123123'])
undefined
> keygrip.sign('session=' + session)
'KMGn5-NJyLXro070_1-rFwJIOtU'
> keygrip.verify('session=' + session, 'KMGn5-NJyLXro070_1-rFwJIOtU')
true
```
