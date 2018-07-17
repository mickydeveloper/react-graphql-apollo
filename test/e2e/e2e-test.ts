import * as assert from "assert";
import cabbie from "cabbie-sync";

const driver = cabbie("browserstack", { browserStackUsername: "edconline1", browserStackAccessKey: "1rf8Gy8m5JyRxgnwF42o", browser: {
  name: 'chrome'
}, debug: true});

try {
  // navigate to a url in the currently active window
  driver.activeWindow.navigateTo("http://localhost:3000");

  //Checks the todo creation flow
  const todoListCount = driver.activeWindow
    .getElement(".todo-list")
    .getElements(".todo-item").length;

  const addButton = driver.activeWindow.getElement(".add-button");
  addButton.mouse.click();

  const textInput = driver.activeWindow.getElement("[data-qa='text']");
  textInput.sendKeys("E2E test");

  const createButton = driver.activeWindow.getElement("button.create");
  createButton.mouse.click();

  const newTodoListCount = driver.activeWindow
    .getElement(".todo-list")
    .getElements(".todo-item").length;
  assert(newTodoListCount === todoListCount + 1);
} finally {
  // whether tests pass or fail, dispose of the driver
  driver.dispose();
}

