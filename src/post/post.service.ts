import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  private posts = [
    { id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물 내용입니다.' },
    { id: 2, title: '두 번째 게시물', content: '두 번째 게시물 내용입니다.' },
  ];

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  create(createPostDto: CreatePostDto) {
    const newPost = {
      id: this.posts.length + 1,
      ...createPostDto,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const post = this.findOne(id);
    if (!post) {
      return null;
    }
    Object.assign(post, updatePostDto);
    return post;
  }

  remove(id: number) {
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) {
      return null;
    }
    return this.posts.splice(index, 1);
  }
}
