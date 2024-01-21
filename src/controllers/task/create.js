const createTask = async (req, res) => {
    const {
      // session,
      db: { Task }, // Assuming Task is your Task model
      body: { taskName, description }, // Extract task details and user ID from request body
    } = req;

 const newTask = await Task.create(taskName, description);
//  session.userId = user.id;
 res.send(newTask);
}

module.exports = createTask;