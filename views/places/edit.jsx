const React = require('react')
const Def = require('../default')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input id="name" name="name" className="form-control" defaultValue={data.place.name} />
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input id="pic" name='pic' className="form-control" defaultValue={data.place.pic}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input id="city" name='city' className="form-control" defaultValue={data.place.city}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <input id="state" name='state' className="form-control" defaultValue={data.place.state}/>
              </div>
              <div className="form-group col-sm-6">
              <label htmlFor="cuisines">Cusines</label>
              <input id="cuisines" name='cuisines' className="form-control" defaultValue={data.place.cuisines}/>
              </div>
          </div>
          <input className="btn btn-primary" type="submit" value="Update Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
