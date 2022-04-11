"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.Port || 3000;
    app.useStaticAssets((0, path_1.resolve)('../progect1_2/build'));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map