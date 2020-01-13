import {GraphQLObjectType, GraphQLString} from 'graphql';
import { Author } from './Author';
import {FakeDatabase} from '../../FakeDatabase';

export const Post = new GraphQLObjectType({
    name: 'Post',
    description: 'All details of a blog post',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        content: {type: GraphQLString},

        author: {
            type: Author,
            resolve: (post) => {
                return FakeDatabase.getAuthor(post.author)
            }
        }
    })
})