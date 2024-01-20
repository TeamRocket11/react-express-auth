const createTask = async (req, res) => {
    const {
        db: { Task }, // Assuming Task is your Task model
        body: { user, taskname, description }, // Extract task details and user ID from request body
    } = req;

 const newTask = await Task.create(user, taskname, description);
 res.status(201).send(newTask);
}

module.exports = createTask;