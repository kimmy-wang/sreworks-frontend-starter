import gulp from 'gulp'

export const runTask = (task) => {
  const taskInstance = gulp.task(task)
  if (taskInstance === undefined) {
    throw new Error(`task_not_found, ${task}`)
  }
  try {
    taskInstance.apply(gulp)
  } catch (err) {
    throw new Error(err)
  }
}
