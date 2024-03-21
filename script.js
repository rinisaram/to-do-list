function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    var datetimeInput = document.getElementById("datetimeInput").value;
    if (task.trim() !== '' && datetimeInput.trim() !== '') {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        var datetime = new Date(datetimeInput);
        li.innerHTML = '<span>' + task + '</span>' + ' - Due: ' + datetime.toLocaleString();
        
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() {
            this.parentElement.remove();
        };
        
        li.appendChild(deleteButton);
        ul.appendChild(li);
        input.value = "";
        document.getElementById("datetimeInput").value = "";

        // Set Reminder
        var now = new Date();
        var timeDiff = datetime - now;
        if (timeDiff > 0) {
            setTimeout(function() {
                alert('Reminder: ' + task);
            }, timeDiff);
        }
    } else {
        alert("Please enter a task and date/time for the reminder!");
    }
}
