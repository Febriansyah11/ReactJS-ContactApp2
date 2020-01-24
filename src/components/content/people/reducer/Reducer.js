const initialState = {
  people: null,
  peopleId: null,
  contact: [],
  loading: true,
  addContact: {
    firstName: "",
    lastName: "",
    age: null,
    photo: ""
  },
  editContact: {
    firstName: "",
    lastName: "",
    age: null,
    photo: ""
  }
};

export default function peopleReducer(state = initialState, action) {
  const { type, contact, loading, peopleId, addContact, editContact} = action;
  console.log(addContact, "ini reducer");
  switch (type) {
    case "FETCH_CONTACT":
      return { ...state, loading: true };
    case "FETCH_CONTACT_DONE":
      return { ...state, loading, contact };
    case "SELECTED_PEOPLE":
      return { ...state, peopleId };
    case "HANDLE_FIRSTNAME":
      return { ...state, addContact: { ...state.addContact, firstName: contact }};
    case "HANDLE_LASTNAME":
      return { ...state, addContact: { ...state.addContact, lastName: contact }};
    case "HANDLE_AGE":
      return { ...state, addContact: { ...state.addContact, age: contact } };
    case "HANDLE_PHOTO":
      return { ...state, addContact: { ...state.addContact, photo: contact } };
    case "FECTH_CONTACT_BY_ID":
      return { ...state, editContact : contact};
    case "HANDLE_EDIT_FIRSTNAME":
      return { ...state, editContact: { ...state.editContact, firstName: contact }};
    case "HANDLE_EDIT_LASTNAME":
      return { ...state, editContact: { ...state.editContact, lastName: contact }};
    case "HANDLE_EDIT_AGE":
      return { ...state, editContact: { ...state.editContact, age: contact } };
    case "HANDLE_EDIT_PHOTO":
      return { ...state, editContact: { ...state.editContact, photo: contact } };
    case "RESET_STATE_EDIT":
      return { ...state, editContact: initialState.editContact };
    default:
      return state;
  }
}
