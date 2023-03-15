import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postEntity } from 'src/shared/entities/post.entity';
import { MulterModule } from '@nestjs/platform-express';
import { userEntity } from 'src/shared/entities/user.entity';
import { FileUploadService } from 'src/shared/config/multer.config';
import { commentEntity } from 'src/shared/entities/comment.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([postEntity, userEntity, commentEntity]),
    MulterModule.registerAsync({
      useClass: FileUploadService
    })
  ],
  providers: [PostsService],
  controllers: [PostsController]

})
export class PostsModule { }
