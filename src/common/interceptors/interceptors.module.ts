import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

@Module({
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ErrorHandlingInterceptor
        }
    ]
})
export class InterceptorsModule {}