const React = require('react')
const Def = require('../default')

function commentForm (data) {

    return (
        <Def>
          <main>
            <h1>Add a New Comment</h1>
          
            <form method="POST" action={`/places/${data.id}/comment`}>
              <div className="form-group">
                <label htmlFor="name">Author</label>
                <input type='text' className="form-control" id="author" name="author" required />
              </div>
              <div className="form-group">
                <label htmlFor="name">Content</label>
                <input type='textarea' className="form-control" id="content" name="content" required />
              </div>
              <div className="form-group">
                <label htmlFor="stars">Star Rating</label>
                <input type='number' step={.5} className="form-control" id="stars" name="stars" required />
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant</label>
                <input type='checkbox'  className="form-control" id="rant" name="rant" required />
              </div>
            
              <input className="btn btn-primary" type="submit" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = commentForm
