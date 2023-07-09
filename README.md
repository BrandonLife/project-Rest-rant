# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Routes

<table>
<tr>
<th>Method</th>
<th>Path</th>
<th>Purpose</th>
</tr>
<!-- Home page route -->
<tr>
<td>GET</td>
<td>/</td>
<td>Home page</td>
</tr>
<!-- Places index page -->
<tr>
<td>GET</td>
<td>/places</td>
<td>Places index page</td>
</tr>
<!-- Create new place -->
<tr>
<td>POST</td>
<td>/places</td>
<td>Create new place</td>
</tr>
<!-- Form Page -->
<tr>
<td>GET</td>
<td>/places/new</td>
<td>Form page for creating a new place</td>
</tr>
<!-- Particular place-->
<tr>
<td>GET</td>
<td>/places/:id</td>
<td>Details about a particular place</td>
</tr>
<!-- Particular place update-->
<tr>
<td>PUT</td>
<td>/places/:id</td>
<td>Update a particular place</td>
</tr>
<!-- Form page for editing-->
<tr>
<td>GET</td>
<td>/places/:id/edit</td>
<td>Form page for editing an existing place</td>
</tr>
<!-- DELETE a particular place-->
<tr>
<td>DELETE</td>
<td>/places/:id/</td>
<td>DELETE a particular place</td>
</tr>
<!-- Create a rant-->
<tr>
<td>POST</td>
<td>/places/:id/rant</td>
<td>Create a rant (comment) about a particular place</td>
</tr>
<!-- Delete a rant-->
<tr>
<td>DELETE</td>
<td>/places/:id/rant/:rantId</td>
<td>Delete a rant (comment) about a particular place</td>
</tr>
<!-- 404 page-->
<tr>
<td>GET</td>
<td>*</td>
<td>404 page (matches any route not defined above)</td>
</tr>
</table>
