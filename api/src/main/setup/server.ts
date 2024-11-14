import { app } from "../config/app";

async function start() {
    try {
        await app.listen({
            port: 3000,
            host: '0.0.0.0',
        }).then(() => {
            console.log('HTTP Server Running!');
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

void start();