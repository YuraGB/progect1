import {Controller, Get} from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Get()
    root() {
        return "Hello auth";
    }
}
