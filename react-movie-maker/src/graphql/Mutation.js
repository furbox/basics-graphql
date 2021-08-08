import { gql } from '@apollo/client';

export const CREATE_MOVIE = gql`
    mutation AddMovie($name: String!,
        $genre: String!,
        $year: String!,
        $rate: Int!,
        $comment: String!,
        $link: String!,
        $img: String!){
        addMovie(name: $name, genre: $genre, year: $year, rate: $rate, comment: $comment, link:$link, img:$img){
            name, genre, year, rate, comment, link, img
        }
    }
`;