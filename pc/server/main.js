const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
const Path = require("path");
const { createReadStream } = require("fs");

const app = new Koa();
const rootRouter = new Router();

const PORT = 4200;
const DIST_PATH = Path.join(__dirname, "../dist");

app.use(Static(DIST_PATH));

rootRouter.get(/.*/, (ctx) => {
  ctx.set("Content-Type", "text/html;charset=utf-8");
  ctx.body = createReadStream(Path.join(DIST_PATH, "index.html"));
});

app.use(rootRouter.routes()).use(rootRouter.allowedMethods());
app.listen(PORT, () => console.info(`Listening on ${PORT}`));
