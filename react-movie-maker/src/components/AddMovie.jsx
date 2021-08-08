import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_MOVIE } from '../graphql/Mutation';

let input;

const initialState = {
    name: '',
    genre: '',
    year: '',
    rate: '',
    comment: '',
    link: '',
    img: ''
}

const AddMovie = () => {
    const [form, setForm] = useState(initialState);

    const [addMovie, { data, loading, error }] = useMutation(CREATE_MOVIE);

    const onChange = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const submitMovie = (e) => {
        e.preventDefault();
        addMovie({
            variables: {
                name: form.name,
                genre: form.genre,
                year: form.year,
                comment: form.comment,
                link: form.link,
                img: form.img
            }
        });
        
    }
    return (
        <div className="addMovie" id="form">
            <form onSubmit={submitMovie}>
                <label htmlFor="name">Nombre</label>
                <input value={form.name} onChange={onChange} type="text" required name="name" />
                <label htmlFor="genre">Genero</label>
                <input value={form.genre} onChange={onChange} type="text" required name="genre" />
                <label htmlFor="year">Año</label>
                <input value={form.year} onChange={onChange} type="text" name="year" required />
                <label htmlFor="link">Link de la pelicula</label>
                <input value={form.link} onChange={onChange} type="text" name="link" required />
                <label htmlFor="img">Link de la imagen</label>
                <input value={form.img} onChange={onChange} type="text" name="img" required />
                <label htmlFor="rate">Calificación</label>
                <input value={form.rate} onChange={onChange} type="number" min="1" max="10" name="rate" required />
                <label htmlFor="comment">Comentario</label>
                <textarea value={form.comment} onChange={onChange} name="comment" cols="50" rows="5" required></textarea>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie;