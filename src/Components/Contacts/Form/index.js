import { useEffect, useState } from "react";

const initalValues = {
  fullname: "",
  phone_number: "",
};

function Form({addContact, contacts}) {
  const [form, setForm] = useState(initalValues);

  useEffect(() => {
    setForm(initalValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(form.phone_number)

    if (
      form.fullname.length === 0 ||
      form.phone_number.length < 10 ||
      isNaN(form.phone_number)
    )
      return false;

    addContact([...contacts, form]);
  };


  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
