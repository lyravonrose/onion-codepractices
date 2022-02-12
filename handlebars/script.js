(function () {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    var spiced = {
        cohorts: [
            {
                name: "Onion",
                nickname: "I have an onion on my head",
                favouriteFood: ["Chocolate", "Kebab", "Pizza", "Octopus"],
                skills: {
                    javascript: true,
                    html: 10,
                    dancing: "strong no...",
                },
            },
            {
                name: "Poppy",
                nickname: "The Poppers",
                favouriteFood: ["Salad", "Sausage", "rice"],
                skills: {
                    javascript: "yes",
                    react: 10,
                    dancing: "occasionally",
                },
            },
            {
                name: "Mustard",
                nickname: "The mustardians",
                favouriteFood: ["Sweets", "Ice cream", "Tuna"],
                skills: {
                    javascript: true,
                    everything: 10,
                    dancing: "All the time",
                },
            },
        ],
    };

    $(".onion-info").html(Handlebars.templates.onion(spiced));
})();
