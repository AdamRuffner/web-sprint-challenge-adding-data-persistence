const express = require("express");
const server = express();

const ProjectRouter = require("./routers/projects-router");
const ResourceRouter = require("./routers/resources-router");
const TasksRouter = require("./routers/tasks-router");

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TasksRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`-- Listening on port ${PORT} --`);
});
