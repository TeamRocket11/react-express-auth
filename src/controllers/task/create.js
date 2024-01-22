const createTask = async (req, res) => {
    const {
      session, // this req.session property is put here by the handleCookieSessions middleware
      db: { Task }, // this req.db.User property is put here by the addModelsToRequest middleware
      body: {task_name, description ,user}, // this req.body property is put here by the client
    } = req;
  console.log('tasname:',req.body,'tasname:',req.body.description,'tasname:',req.body.user)
    // TODO: check if username is taken, what should you return?
    if (task_name === undefined || description === undefined || user === undefined) {
        return res.status(400).send({ error: "Missing task details" });
    }
    
    const task = await Task.create(task_name, description, user);
    session.userId = user.id;
  
    res.send(task);
};
module.exports = createTask;
  
 