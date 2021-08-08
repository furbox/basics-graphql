const Movie = require('../models/model');

const resolvers = {
    movies: () => {
        return Movie.find()
    },

    movieByName: (args) => {
        return Movie.findOne({name: args.name})
    },

    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year,
            comment: args.comment,
            link: args.link,
            rate: args.rate,
            img: args.img
        });
        movie.save()
        return movie;
    }
}

module.exports = resolvers;