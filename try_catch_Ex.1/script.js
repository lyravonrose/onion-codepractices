$("button").on("click", function () {
    var inputVal = $("textarea").val();
    try {
        var parsed = JSON.parse(inputVal);
        prompt("Valid ๐งก", parsed);
    } catch (err) {
        alert("Error ๐: ", err);
    }
});
