document.addEventListener("DOMContentLoaded", function() {
    var welcomeDiv = document.getElementById("welcome-message");
    var menuDiv = document.getElementById("menu");
    var contentFormDiv = document.getElementById("content-form");
    var contentSummaryDiv = document.getElementById("content-summary");
    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    var areaInput = document.getElementById("area-input");
    var reportInput = document.getElementById("report-input");
    var backButton = document.getElementById("back-button");
    var saveButton = document.getElementById("save-button");
    var nameSummary = document.getElementById("name-summary");
    var emailSummary = document.getElementById("email-summary");
    var areaSummary = document.getElementById("area-summary");
    var reportSummary = document.getElementById("report-summary");
    var sendButton = document.getElementById("send-button");

    welcomeDiv.style.display = "block";

    function showMenu() {
        menuDiv.innerHTML = "";
        createMenu(menuItems, menuDiv);
    }

    function showReportForm() {
        welcomeDiv.style.display = "none";
        menuDiv.style.display = "none";
        contentFormDiv.style.display = "block";
        contentSummaryDiv.style.display = "none";
    }

    function showReportSummary() {
        welcomeDiv.style.display = "none";
        menuDiv.style.display = "none";
        contentFormDiv.style.display = "none";
        contentSummaryDiv.style.display = "block";

        nameSummary.textContent = "Nombre: " + nameInput.value;
        emailSummary.textContent = "Correo Electrónico: " + emailInput.value;
        areaSummary.textContent = "Área de trabajo: " + areaInput.value;
        reportSummary.textContent = "Reporte: " + reportInput.value;
    }

    function sendReport() {
        var reportEmail = "daniel.gutierrez@agnicoeagle.com";
        var subject = "Resumen del Reporte";
        var body =
            "Nombre: " + nameInput.value + "\n" +
            "Correo Electrónico: " + emailInput.value + "\n" +
            "Área de trabajo: " + areaInput.value + "\n" +
            "Reporte: " + reportInput.value;

        var mailtoLink = "mailto:" + reportEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        window.location.href = mailtoLink;
    }

    backButton.addEventListener("click", function() {
        showMenu();
    });

    saveButton.addEventListener("click", function() {
        showReportSummary();
    });

    sendButton.addEventListener("click", function() {
        sendReport();
    });

    var menuItems = [
        {
            label: "Inicio",
            action: "showMenu"
        },
        {
            label: "Identifícate",
            action: "showReportForm"
        }
    ];

    function createMenu(items, parentElement) {
        var ul = document.createElement("ul");
        items.forEach(function(item) {
            var li = document.createElement("li");
            var button = document.createElement("button");
            button.textContent = item.label;
            button.addEventListener("click", function() {
                if (item.action === "showReportForm") {
                    showReportForm();
                } else if (item.action === "showMenu") {
                    showMenu();
                }
            });
            li.appendChild(button);
            ul.appendChild(li);
        });
        parentElement.appendChild(ul);
    }

    showMenu();
});








