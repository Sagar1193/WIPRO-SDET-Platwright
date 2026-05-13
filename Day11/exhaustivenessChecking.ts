type TaskStatus =
  | 'Open'
  | 'InProgress'
  | 'Closed';

function handleTask(status: TaskStatus) {

  switch (status) {

    case 'Open':
      console.log("Open");
      break;

    case 'InProgress':
      console.log("Working");
      break;

    case 'Closed':
      console.log("Done");
      break;

    default:
      const exhaustiveCheck: never = status;
      return exhaustiveCheck;
  }
}