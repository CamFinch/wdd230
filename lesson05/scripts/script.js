
window.onload = function(){

    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#list");
    const deleteButton = document.createElement("button");

    button.addEventListener("click", () => {
        if (input.value != "")
            {
                const li = document.createElement("li");
                li.textContent = input.value;
                deleteButton.textContent = "X";
                li.append(deleteButton);
                list.append(li);

                deleteButton.addEventListener("click", () => {
                    list.removeChild(li);
                    input.focus();
                    input.value = "";
                });


            }
        });
    }