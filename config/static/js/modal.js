$(document).ready(() => {
    $('#deleteConfirmModal').on('show.bs.modal', (e) => {
        const button = $(e.relatedTarget);
        const contactID = button.data("id");
        const deleteUrl = button.data("url");
        $("#modal-contact-id").text(contactID);
        $("#confirmDeleteBtn").attr("href", deleteUrl);
    });

    $('#confirmDeleteBtn').click((e) => {
    $("#deleteConfirmModal").model("hide");
    setTimeout(() => {
        window.location.href = $("#confirmDeleteBtn").attr("href");},300);
    });
});
