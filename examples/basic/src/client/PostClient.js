// @flow
import { AxiosPromise } from 'axios'
import { DELETE, GET, PATCH, POST, PUT, Client } from 'axios-decorators'
import type { PostType } from '../type/PostType'


@Client()
class PostClient {
  @GET('/posts')
  static getPostList (): AxiosPromise<PostType> {}

  @GET('/posts/:id')
  static getPost (args: { path: { id: string } }): AxiosPromise<PostType> {}

  @POST('/posts')
  static createPost (args: { data: PostType }): AxiosPromise<PostType> {}

  @PUT('/posts/:id')
  static putPost (args: { path: { id: string }, data: PostType }): AxiosPromise<PostType> {}

  @PATCH('/posts/:id')
  static patchPost (args: { path: { id: string }, data: PostType }): AxiosPromise<PostType> {}

  @DELETE('/posts/:id')
  static deletePost (args: { path: { id: string } }): AxiosPromise<PostType> {}
}

export { PostClient }
