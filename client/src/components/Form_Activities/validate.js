export default function validate(activitif, error) {
  if (!activitif.name) {
    error.name = "the activiti need a name";
  } else {
    error.name = "";
    return error
  }
  if (!activitif.difficulty) {
    error.difficulty = "difficulty require";
  } else {
    error.difficulty = "";
    return error
  }
  if (!activitif.season) {
    error.season = "season require";
  } else {
    error.season = "";
    return error
  }
  if (!activitif.duration) {
    error.duration = "duration require";
  } else {
    error.duration = "";
    return error
  }

  return error;
}
