import { Hono } from "hono";

declare module "bun" {
	interface Env {
		PORT: string | undefined;
	}
}

const app = new Hono();
app.get("/", (c) => c.text("Hello World!"));

const port =
	import.meta.env.PORT == null ? 3000 : Number.parseInt(import.meta.env.PORT);
// biome-ignore lint/suspicious/noConsoleLog: <explanation>
console.log(`Running at http://localhost:${port}`);

export default {
	port,
	fetch: app.fetch,
};
