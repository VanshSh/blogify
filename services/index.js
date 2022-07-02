import { graphql } from 'graphql'
import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

// Get all posts

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                        createdAt
                        title
                        slug
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}

// Get recent posts

export const getRecentPosts = async () => {
    const query = gql`
    query GetPostDetails(){
        posts(
            orderBy: createdAt_ASC
            last:3
            ){
                title
                featuredImage{
                    url
                }
                createdAt
                slug
            }
    }
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}

// Get similar posts

export const getSimilarPosts = async () => {
    const query = gql`
        query GetPostDetails($slug: String!, $category: [String!]) {
            posts(
                where: {
                    slug_not: $slug
                    AND: { ccategories_some: { slug_in: $categories } }
                }
                last: 3
            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.posts
}

// Get all categories
export const getCategories = async () => {
    const query = gql`
        query GetCategories {
            categories {
                name
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query)
    return result.categories
}
