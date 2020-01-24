import axios from "axios";
import Swal from "sweetalert2";
const url = "https://simple-contact-crud.herokuapp.com/contact";

export async function getContact() {
  return await axios.get(url).then(res => res.data);
}

export async function getId(id) {
  return await axios.get(url + `/${id}`).then(res => res.data);
}
export async function deleteContact(id) {
  return await axios.delete(url + `/${id}`).then(res => res.data);
}
export async function post(contactForm) {
  const data = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactForm)
  }).then(async res => {
    console.log(res, "response create contact");
    if (res.status === 201) {
      await Swal.fire("Success!", `${res.statusText}`, "success");
    } else if (res.status === 400) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${res.statusText}`
      });
    } else if (res.status === 500) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
    return res.json();
  });
  return data;
}

export async function update(id, people) {
  const data = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(people)
  });
  console.log(data, "response update contact");
  if (data.status === 201) {
    await Swal.fire("Success!", "Edit Contact Success!", "success");
    return await data.json();
  } else if (data.status === 400) {
    await Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${data.statusText}`
    });
    return null;
  }
}
