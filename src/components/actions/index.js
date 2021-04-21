export const fetchStudents = (studs) => {
  return {
    type: 'STORESTUD',
    payload: studs,
  }
}

export const setLoading = () => {
  return {
    type: 'SETLOADING',
  }
}
