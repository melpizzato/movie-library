import { useState } from "react"
import TextInput from "./TextInput"
import PropTypes from "prop-types"

MovieForm.propTypes = {
    addMovie: PropTypes.func
}

export default function MovieForm({addMovie}){

    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addMovie({title, poster})
        setTitle("")
        setPoster("")
    }

    return (
        <form onSubmit={handleSubmit}>
        <TextInput id="title" label="Title:" value={title} setValue={setTitle} />
        <TextInput id="cover" label="Poster URL:" value={poster} setValue={setPoster} />
        <button type="submit">Add to library</button>
      </form>
    )
}