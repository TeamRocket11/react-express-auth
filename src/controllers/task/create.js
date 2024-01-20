const createTask = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Task }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: { user, task_name, description }, // this req.body property is put here by the client
    } = req;
  
    // TODO: check if username is taken, what should you return?
    const task = await Task.create(user, task_name, description );
    session.userId = user.id;
  
    res.send(task);
};
module.exports = createTask;
  
 