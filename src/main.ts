import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Estate connect api')
      .setDescription('The Estate connect api description')
      .setVersion('1.0')
      .addTag('Estate connect')
      .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, documentFactory);

    await app.listen(3000);
  } catch (error) {
    console.error('error', error);
  }
}
bootstrap();
