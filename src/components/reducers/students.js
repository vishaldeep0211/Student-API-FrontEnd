const Students = (
  state = {
    loading: true,
    data: [],
    err: '',
  },
  action
) => {
  switch (action.type) {
    case 'STORESTUD':
      return { loading: false, data: action.payload, err: '' }
    case 'SETLOADING':
      return { ...state, loading: true }
    default:
      return state
  }
}

export default Students
