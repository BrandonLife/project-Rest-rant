const React = require('react')
const Def = require('../default')

function edit_form (data) {
  console.log(data, "edit form data")
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input id="name" name="name" defaultValue={data.place.name} />
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input id="pic" name='pic' defaultValue={data.place.pic}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input id="city" name='city' defaultValue={data.place.city}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <input id="state" name='state' defaultValue={data.place.state}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="cuisines">Cusines</label>
              <input id="cuisines" name='cuisines' defaultValue={data.place.cuisines}/>
              </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
