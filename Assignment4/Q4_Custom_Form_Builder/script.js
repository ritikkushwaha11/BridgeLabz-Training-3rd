// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
  }

  createForm() {
    const form = document.createElement("form");
    form.id = "dynamicForm";

    this.fields.forEach((field, index) => {
      const label = document.createElement("label");
      label.textContent = field.label;

      const input = document.createElement("input");
      input.type = field.type;
      input.name = field.name || `field${index + 1}`;
      input.required = Boolean(field.required);

      label.appendChild(input);
      form.appendChild(label);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Submit";
    form.appendChild(submit);

    form.addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("output").textContent =
        JSON.stringify(this.getFormData(), null, 2);
    });

    this.container.innerHTML = "";
    this.container.appendChild(form);
  }

  getFormData() {
    const formData = new FormData(document.getElementById("dynamicForm"));
    return Object.fromEntries(formData.entries());
  }
}

const fields = [
  { type: "text", label: "Username", name: "username", required: true },
  { type: "email", label: "Email", name: "email", required: true },
  { type: "password", label: "Password", name: "password", required: true }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();
