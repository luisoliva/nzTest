export class RolModel {
  title: string;
  checked: boolean;
  description: string;

  constructor() {
    this.title = 'Rol A';
    this.checked = false;
    this.description = 'A structural directive that renders a template for each item in a collection. The directive is placed on an element, which becomes the parent of the cloned templates.';
  }
}
