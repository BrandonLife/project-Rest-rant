const React = require('react')
const Def = require('../default')

function show (place) {
  console.log(place)
    return (
        <Def>
          <main>
           <h1 key={place.id}>{place.name}
           <p>Currently Unrated</p>
           <img src={`${place.pic}`}></img>
           </h1>
           <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
              Delete
              </button>
            </form>     
          </main>
          <p>No comments yet!</p>
        </Def>
    )
}

module.exports = show
