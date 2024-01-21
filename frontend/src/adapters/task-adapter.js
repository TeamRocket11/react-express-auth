import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions} from "../utils";

const baseUrl = '/api/users/';

export const createTask = async ({ taskname, description }) => (
  fetchHandler(baseUrl, getPostOptions({ taskname, description }))
  );