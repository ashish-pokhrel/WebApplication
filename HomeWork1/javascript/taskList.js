window.onload = function () {
    const addButton = document.getElementById("addTask");
    const clearButton = document.getElementById("clearTask");
    const taskField = document.getElementById("task");
    const taskListField = document.getElementById("taskList");
    const localStorageId = "taskFieldList";
    function loadDataOnPage() {
        const getStorageData = localStorage.getItem(localStorageId);
        if (getStorageData != null) {
            taskListField.value = getStorageData;
        }
    }
    loadDataOnPage();
    addButton.onclick = function () {
        let lineBreak = "";
        if (taskListField.value != null && taskListField.value != "")
            lineBreak = "\n";
        taskListField.value += lineBreak + taskField.value;
        localStorage.setItem("taskFieldList", taskListField.value);
    }
    clearButton.onclick = function () {
        taskListField.value = "";
        localStorage.removeItem(localStorageId);
    }

    taskField.focus();
}