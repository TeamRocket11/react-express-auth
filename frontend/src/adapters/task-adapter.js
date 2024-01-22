import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions} from "../utils";

const baseUrl = 'http://localhost:3000/api/tasks';


export const createTask = async ({ task_name, description,user }) => (
    fetchHandler(baseUrl, getPostOptions({ task_name, description, user }))
  );