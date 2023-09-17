import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts"

import View from "./index.jsx"

const app = new Application()

app.use(ctx => {
    ctx.response.headers.set("Content-Type", "text/html")
    ctx.response.body = View
})

await app.listen({ port: 8000 })