import { fetchHandler, getPostOptions} from "../utils";

const baseUrl = '/api';


export const createTask = async ({ user, taskname, description }) => (
    fetchHandler(`${baseUrl}/tasks`, getPostOptions({ user,taskname, description }))
  );