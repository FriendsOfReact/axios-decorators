import 'regenerator-runtime/runtime'
import { ClientConfigurator, ClientLogger } from 'axios-decorators'
import { PostClient } from './client'

(async () => {
  // Set base URL for whole clients.
  ClientConfigurator.setBaseURL('https://jsonplaceholder.typicode.com')

  // Open debug logs.
  ClientLogger.setStatus(true)

  // Get post list
  const postList = await PostClient.getPostList()
  console.table({
    status: `${postList.statusText} (${postList.status})`,
    method: postList.config.method,
    url: postList.config.url
  })

  // Get post by id
  const postById = await PostClient.getPost({ path: { id: '1' } })
  console.table({
    status: `${postById.statusText} (${postById.status})`,
    method: postById.config.method,
    url: postById.config.url
  })

  // Create a post
  const createPost = await PostClient.createPost({
    data: {
      userId: 1,
      title: 'Post title',
      body: 'Post body'
    }
  })
  console.table({
    status: `${createPost.statusText} (${createPost.status})`,
    method: createPost.config.method,
    url: createPost.config.url
  })

  // Put data to the post
  const putPost = await PostClient.putPost({
    path: {
      id: '1'
    },
    data: {
      userId: 2,
      title: 'Modified post title',
      body: 'Modified post body'
    }
  })
  console.table({
    status: `${putPost.statusText} (${putPost.status})`,
    method: putPost.config.method,
    url: putPost.config.url
  })

  // Patch the post
  const patchPost = await PostClient.patchPost({
    path: {
      id: '1'
    },
    data: {
      body: 'Modified post body for patch'
    }
  })
  console.table({
    status: `${patchPost.statusText} (${patchPost.status})`,
    method: patchPost.config.method,
    url: patchPost.config.url
  })

  // Delete the post
  const deletePost = await PostClient.deletePost({
    path: {
      id: '1'
    }
  })
  console.table({
    status: `${deletePost.statusText} (${deletePost.status})`,
    method: deletePost.config.method,
    url: deletePost.config.url
  })

})()
