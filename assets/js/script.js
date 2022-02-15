//close modal if the user clicks outside the modal
let modal = document.getElementById("projectModal");
window.onclick = (e) => {
    if (e.target == modal) {
        closeProjectModal();
    }
}

//fill in modal and show it
const showProject = (num) => {
    $("#modalBody").html("");
    const img = $('<img>');
    img.addClass("img-fluid")
    const p = $('<p>');
    const button1 = $('<button>');
    const button2 = $('<button>');
    button1.attr("type", "button");
    button2.attr("type", "button");
    button1.attr("style", "background-color: white");
    button2.attr("style", "background-color: white");
    button1.addClass("btn m-1");
    button2.addClass("btn m-1");

    switch (num) {
        case 1:
            $("#modalTitle").text('Auto Parts Full Stack Application');
            img.attr("src", "./assets/images/autoparts.png")
            img.attr("alt", "Auto Parts Website")
            p.text("Full-Stack application utilizing handlebars for the front-end, and node express/sequelize for the back-end");
            button1.text("Live Site");
            button1.attr("onclick", "window.open('https://auto-parts-inventory-tracker.herokuapp.com/')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/IanMordaunt/Auto-Parts-Inventory')");
            break;
        case 2:
            $("#modalTitle").text('Note Taker App');
            img.attr("src", "./assets/images/notetaker.png")
            img.attr("alt", "Note Taker Website")
            p.text("Note taking application. Allows for creating/saving of titled notes");
            button1.text("Live Site");
            button1.attr("onclick", "window.open('https://note-taker-app-345.herokuapp.com/')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/davidschepis/Note_Taker')");
            break;
        case 3:
            $("#modalTitle").text('Progressive Web Application: Text Editor');
            img.attr("src", "./assets/images/texteditor.png")
            img.attr("alt", "Text Editor Website")
            p.text("Text Editor with full PWA functionality");
            button1.text("Live Site");
            button1.attr("onclick", "window.open('https://text-editor-1234.herokuapp.com/')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/davidschepis/Text_Editor')");
            break;
        case 4:
            $("#modalTitle").text('Weather Daskboard');
            img.attr("src", "./assets/images/weather.png")
            img.attr("alt", "Weather Website")
            p.text("Weather Dashboard application that allows for viewing the current forecast for any city");
            button1.text("Live Site");
            button1.attr("onclick", "window.open('https://davidschepis.github.io/Homework6/')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/davidschepis/Homework6')");
            break;
        case 5:
            $("#modalTitle").text('Social Network Backend');
            img.attr("src", "./assets/images/socialnetworkapi.png")
            img.attr("alt", "Social Network Logo")
            p.text("Back-end for a social networking site");
            button1.text("Example Video Showing Usage");
            button1.attr("onclick", "window.open('https://drive.google.com/file/d/1hREa4dhzQxDrNTNX3puc2RBcSJ4GzdSb/view')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/davidschepis/Social_Network_API')");
            break;
        case 6:
            $("#modalTitle").text('Tech Blog Website');
            img.attr("src", "./assets/images/techblog.png")
            img.attr("alt", "Tech Blog Website")
            p.text("Full-Stack application that allows for interacting with a fully functioning Tech Blog");
            button1.text("Live Site");
            button1.attr("onclick", "window.open('https://tech-blog-432.herokuapp.com/')");
            button2.text("Github Repo");
            button2.attr("onclick", "window.open('https://github.com/davidschepis/Tech_Blog')");
            break;
        default:
            break;
    }
    $("#modalBody").append(img, p, button1, button2);
    // $('#projectModal').modal('show');
    $('#projectModal').fadeIn('slow');
}

//close modal
const closeProjectModal = () => {
    // $('#projectModal').modal('hide');
    $('#projectModal').fadeOut('fast');
}
