const GRAPHQL_ENDPOINT = "https://z37.c93.myftpupload.com/graphql";

async function fetchGraphQL(query, variables = {}) {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GraphQL Error: ${error}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts {
        nodes {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const variables = { slug };

  try {
    const data = await fetchGraphQL(query, variables);
    return data.post;
  } catch (error) {
    console.error(`Error fetching post with slug '${slug}':`, error);
    return {};
  }
}
