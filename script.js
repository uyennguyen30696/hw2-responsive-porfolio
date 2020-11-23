// Feature to add in the future when my skills get better
function transitionPage() {
    // Hide to left / show from left
    $("#project-01").toggle("slide", {direction: "left"}, 500);
    // Show from right / hide to right
    $("#project-01").toggle("slide", {direction: "right"}, 500);

    $("#weather").toggle("slide", {direction: "left"}, 500);
    $("#weather").toggle("slide", {direction: "right"}, 500);

    $("#workday").toggle("slide", {direction: "left"}, 500);
    $("#workday").toggle("slide", {direction: "right"}, 500);
}

$(document).ready(function() {
    $("#project-01").click(transitionPage);
    $("#weather").click(transitionPage);
    $("#workday").click(transitionPage);
});