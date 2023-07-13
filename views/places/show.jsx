const React = require('react')
const Def = require('../default')

function show (data, id) {
    return (
        <Def>
          <main>
           <h1 key={{id}}>{data.place.name}
           <p>Currently Unrated</p>
           </h1>
           <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
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
