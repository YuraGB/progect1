"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../constants");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose_1.default.connect(constants_1.MONO_DB_CONNECTION_STRING),
    },
];
//# sourceMappingURL=database.providers.js.map