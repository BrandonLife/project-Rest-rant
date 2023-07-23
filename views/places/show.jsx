
const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div key={data.place.id} className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className="row">
            <img src={data.place.pic} width={50 + "px"} alt="" />
          </div>
          <hr />
          <a href={`/places/commentNew/${data.place.id}`} className="btn btn-warning"> 
           Add comment
            </a>  
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>  
          <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
             Delete
            </button>
          </form> 
          <h2>Comments</h2>
          {comments}
          
        </main>
      </Def>
  )
}

module.exports = show
