This code dynamically builds a form from a JSON array.

Setting Up
--------
- Run `npm start` and open http://localhost:3000/.

Features
--------
<h5>Dynamic Forms</h5>

- The constant in `formFields.js` is used to dynamically generate a form. (See [Future Plans](https://github.com/at4260/dynamic-forms/blob/master/README.md#future-plans) for how to properly handle the JSON array.)
- Loop through the JSON array to display the fields.
- If the field has a conditional key, check the state to see if `conditional.name` has been inputted. If so, take the value inputted and convert the string into a date object. Evaluate against `conditional.show_if` to determine if the field needs to be displayed.
- Submit the form and see the JSON object of the entered field values.

<h5>User Experience</h5>

- Keyboard shortcuts to speed through filling out the form
- HTML constraint validation built-in to check for required fields and that emails are in the right format

Future Plans
--------
<h5>Tests</h5>

- Test different JSON arrays in creating a dynamic form
- Test the rendering of the conditional forms
- Test the logic around string to date object and evaluating `show_if` function
- Test the output as a JSON object
- Check that JSON object is saved to database

<h5>JSON Array Input</h5>

- Determine how to handle the JSON array. Possible considerations:
  - A form for the team to enter in a JSON array. Array would get saved in the database with a name and tied to an organization ID. This could also be tied to a route for the customer to access directly. Form would be generated after selecting for name and organization ID.
  - If only a lightweight solution is needed, remove the backend/database. A form for the team to enter in a JSON array. Upon submitting, dynamically generate the form.
- Validate JSON array. Example: each array should have a `tag`, `name`, `type`, and `human_label`.

<h5>JSON Object Output</h5>

- Determine how to handle the JSON object that's outputted. In the current solution, I have chosen to simply display the JSON object. Possible considerations:
  - JSON object is saved to the database tied to an user ID and org ID.

<h5>User Experience</h5>

- HTML placeholders can be added to the JSON array to provide examples to users. Either manually include in the JSON array or have an object to cross-reference the JSON array `name` to a placeholder option. Example: the `name` of `email` is always tied to the placeholder `jane@example.com`.
- Create a seamless experience and make sure the flow from other forms is consistent. (I used the Sparrow landing page as an example for some of those design decisions.)
- Context needs to be provided for what the form is for. Perhaps an organization name and form type at the top.
