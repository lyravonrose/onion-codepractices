$("button").on("click", function () {
    var inputVal = $("textarea").val();
    try {
        var parsed = JSON.parse(inputVal);
        prompt("Valid 🧡", parsed);
    } catch (err) {
        alert("Error 💔: ", err);
    }
});
