$(document).ready(function () {
    $('#logs').DataTable();
    $(".create-issue-btn").on("click", (e) => {
        var btn = $(e.currentTarget);
        var dataContainer = btn.parent().parent();

        var log = {
            id: dataContainer.data("id"),
            logLevel: dataContainer.data("log-level"),
            message: dataContainer.data("message")
        };

        $.post("/logstorage/createIssue", log)
            .done(_ => {
                location.reload();
            });
    });
});
