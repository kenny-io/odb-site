const { builder } = require("@netlify/functions");

const blogDynamicPage = require("../../layouts/blog-view");

const handler = async (event, context) => {
  console.log(context);
  // function to generate all blog posts
  const path = await event.body.path.split("blog/")[1];
  console.log(path);
  const post = await context.$content("blog", path).fetch();
  console.log(post);

  console.log(params);
  return {
    statusCode: 200,
    body: blogDynamicPage(post)
  };
};

exports.handler = builder(handler);
