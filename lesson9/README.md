
## Lesson 9 

Homework:

1 Create a reactive form

Create a component with a registration form. Should be the following containing fields:

Account
1.1 Email (required field, required to check for email)
1.2 Password (required field, Mandatory at least 6 characters)
1.3 Password confirmation (Required not shorter than 6 characters. Same as Password)

Profile
2.1 Name (required field)
2.2 Phone (Phone mask 8 (800) 555 3535, only phone can be reached)
2.3 City

Company
3.1 Name (Required)
3.2 Form of ownership (Required, Type: Select: Legal entity or individual entrepreneur)
3.3 TIN (Required, 9 characters)
3.4 Checkpoint (Required, 9 characters, hide if the form of ownership of the individual entrepreneur)
3.5 OKPO (required field,  8 characters)
3.6 Date of formation (Type: Datepicker)

Contacts (Plural)
4.1 Name (Required if adding a new contact)
4.2 Title (Required if adding a new contact)
4.3 Phone (Required, if you add a new contact, phone mask 8 (800) 555 3535)

We use the components of the Angular Material library to render the form. Fields of type 1.1 are nested, i.e. the form has a similar structure when sending: {account: {name: 'Oleg', password: '123'}, contacts: [{name: 'Ivan'}, ...], ...}.

After clicking the Register button, we output to the console the data that should go to the server, i.e. data object from the form.

The form is reactive, validation errors are displayed under the fields.

2 Displaying form data

Create a component with already defined data which will be use component from the first task and fill all of form's fields.