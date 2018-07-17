import * as assert from "assert";
import cabbie, {startChromedriver} from 'cabbie-sync';

startChromedriver();

const driver = cabbie('chromedriver', {debug: true});

driver.activeWindow.navigateTo("http://localhost:3000");
//Checks the todo creation flow
const todoListCount = driver.activeWindow.getElement(".todo-list").getElements(".todo-item").length;

const addButton = driver.activeWindow.getElement(".add-button");
addButton.mouse.click();

const textInput = driver.activeWindow.getElement("[data-qa='text']");
textInput.sendKeys("E2E test");

const createButton = driver.activeWindow.getElement("button.create");
createButton.mouse.click();

const newTodoListCount = driver.activeWindow.getElement(".todo-list").getElements(".todo-item").length;
assert(newTodoListCount === todoListCount + 1);

driver.dispose();