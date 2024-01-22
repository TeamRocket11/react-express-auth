const createTask = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Task }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: {task_name, description ,user}, // this req.body property is put here by the client
    } = req;
  console.log(req.body.task_name,req.body.description,req.body.user)
    // TODO: check if username is taken, what should you return?
    const task = await Task.create(task_name, description, user);
    session.userId = user.id;
  
    res.send(task);
};
module.exports = createTask;
  
 