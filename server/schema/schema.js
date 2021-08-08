const { buildSchema } = require('graphql');

const MovieSchema = buildSchema(`
    type Query {
        movies: [Movie],
        movieByName(name:String): Movie
    }

    type Mutation{
        addMovie(name: String!,
            genre: String!,
            year: String!,
            rate: Int!,
            comment: String!,
            link: String!,
            img: String!): Movie
    }

    type Movie {
        name: String,
        genre: String,
        year: String,
        rate: Int,
        comment: String,
        link: String,
        img: String
    }
`);

module.exports = MovieSchema;