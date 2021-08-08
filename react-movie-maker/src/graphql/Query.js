import { gql } from '@apollo/client';

export const ALL_MOVIES = gql`
{
    movies{
        name,
        genre,
        year,
        rate,
        comment,
        link,
        img
    }
}`;