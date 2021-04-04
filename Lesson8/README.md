
## Lesson 8

Create simple ToDo App, it has to includes 3 components: todo-list, todo-item and add-item.

Requirements:

Use @Input, (click), ngModel, ngModelChanges

Todo-List component renders item component for each item from todo's list .

Todo-Item component gets data from parent component with help 'items' property, which has to be marked with @Input decorater.

Add-item component includes input field and 'add' button. When button will be clicked, component has to emmit event with help @Output decorater and 'click' event. More infomation about @Output syntax you can get here.

App structure has to be like this: