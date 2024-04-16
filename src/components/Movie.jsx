import PropTypes from "prop-types"

Movie.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  onRemove: PropTypes.func
}

export default function Movie({title, poster, onRemove}){
    return (
        <div>
            <img src={poster} alt={title} />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>
                Remove
              </button>
            </div>
          </div>
    )
}