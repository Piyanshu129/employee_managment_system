import axios from "axios";
const REST_API_BASE_URL='http://localhost:8906/api/emp/allemp';
export const listEmployee = () => {
  return axios.get(REST_API_BASE_URL);
}

const REST_API_BASE_URL1='http://localhost:8906/api/emp';


export const createEmployee = (employee) => axios.post(REST_API_BASE_URL1, employee);


export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL1 + '/' + employeeId)

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL1 + '/' + employeeId, employee)


export  const deleteemp = (employeeId) =>axios.delete(REST_API_BASE_URL1 + '/' + employeeId)