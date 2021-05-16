// Check if the document is now ready
document.addEventListener("DOMContentLoaded", main());

// Run all the methods after HTML is loaded
function main() {
    itemShowContent()
    aboutChangeContent()
    console.log("Js Initiated")
}

// Detect Items being selected
function itemShowContent() {
    var menu = document.getElementById("catalogue-items");

    if (menu != null) {
        // Initalize the content for the items
        var itemName = document.getElementById("catalogue-info").getElementsByTagName("h2")[0];
        var itemDesc = document.getElementById("catalogue-info").getElementsByTagName("p")[0];
        var itemStrings = ["One of the only cans left from the 1885 Coca-Cola prototype. It is still in good condition due to special preserving methods.",
                            "This was a clock that was designed by the Artist and History enthusaist Benjamin Douglas in 1951. It was a limited edition clock to celebrate Christopher Columbus's 500 birthday.", 
                            "One of the 1983 Brisbane Festival poster. It is slightly damage, but you can still make out most of the design.",
                            "This is one of the old number plates in Brisbane, it was before the modern design got introduced.",
                            "This plate is made in 1861, when the pioneers were still building up Australia. It is preserved in good condition,and can be used as a nice decoration.",
                            "This is a flintlock pistol found during 1940, it was considered a lucky weapon by a soldier. It is not functional now, but still holds historical value."];

        var items = menu.getElementsByTagName("a");


        for (let i = 0; i < items.length; ++i) {
            items[i].addEventListener("click", function(event){
                // Prevent default action
                event.preventDefault()
                console.log(i);

                // Make clicked button as select
                for(let j = 0; j < items.length; ++j) {
                    items[j].classList.remove("selected");
                }
                items[i].classList.add("selected");

                // Change the title and description at the side
                itemName.innerHTML = items[i].getElementsByTagName("span")[0].innerHTML;
                itemDesc.innerHTML = itemStrings[i];
            });
        }
    }
}

// Detect content button pressed in about page
function aboutChangeContent() {
    var aboutMenu = document.getElementById("about-menu");
    var aboutDisplay = document.getElementById("about-display");

    if (aboutMenu != null && aboutDisplay != null) {
        var buttons = aboutMenu.children;
        var contents = aboutDisplay.children;

        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].addEventListener("click", function(event){
                // Prevent default action
                event.preventDefault()
                
                // Hide every div and deselect all buttons
                for(var j = 0; j < contents.length; j++){
                    contents[j].classList.add("hide");
                    buttons[j].classList.remove("selected");
                }

                // Show the selected div and highlight selected button
                contents[i].classList.remove("hide");
                buttons[i].classList.add("selected");
            })
        }
    }
}