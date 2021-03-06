export const blogFragment = `
  fragment blog on Blog {
    id
    name
    publishDate
  }
`;

export const postFragment = `
  fragment post on Post {
    id
    title
    postBlogId
  }
`;

export const commentFragment = `
  fragment comment on Comment {
    id
    content
    commentPostId
  }
`;
