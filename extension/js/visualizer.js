function drawPresets(presets)
{
    for (const [key, value] of Object.entries(presets)) {
        addPreset(key, value);
    }
}

function addPreset(name, value)
{
    var presetBox = document.querySelector("#preset-box");
    var button = document.createElement("button");

    button.className = "preset btn";
    button.setAttribute("name", name)
    button.innerHTML = `<span style="overflow: hidden; word-break: break-word; line-height: 0.9; text-align: left; flex-grow: 1;">${name}</span><button class="delete-button">&times;</button>`
    button.addEventListener('click', function(){
        clearAllmarker();
        value.forEach(element => {
            getMarkerById(element).click();
        });
    })
    button.querySelector('.delete-button').addEventListener('click', function (event) {
        event.stopPropagation();
        delete presets[name];
        removePreset(name);
        savePresets(presets);
    });
    presetBox.appendChild(button);
    
    $(".preset").click(function(event){
        setActive(event.currentTarget)
    })
    return button;
}

function removePreset(name)
{
    var presetBox = document.querySelector("#preset-box");
    var button = presetBox.querySelector(`[name="${name}"]`)
    presetBox.removeChild(button);
}


function createPresetDiv() {
    var block = document.getElementsByClassName("d-block")[0].firstChild;

    var presetDiv = document.createElement("div");
    var presetBox = document.createElement("div");
    var presetInput = document.createElement("input");
    var presetSaveButton = document.createElement("button");

    presetInput.placeholder = "Enter name: "
    presetInput.id = "preset-name"
    presetSaveButton.innerText = "Save";
    presetSaveButton.id = "save-preset-button";
    presetSaveButton.className = "btn";
    presetDiv.className = "MarkerGroup"
    presetDiv.innerHTML = '<span class="uppercase text-gray">Presets</span>'

    presetBox.className = "css-yyw27i"
    presetBox.id = "preset-box"

    presetDiv.appendChild(presetBox);
    presetBox.appendChild(presetInput);
    presetBox.appendChild(presetSaveButton);
    block.insertBefore(presetDiv, block.childNodes[2]);
}


function createRightBarmenu()
{
    var right_bar = document.getElementsByClassName("MapLayout_Rightbar ")[0];
    var right_bar_menu = document.createElement("div");
    var right_bar_menu_list = document.createElement("ul");
    var close_right_bar_menu = document.createElement("li");

    right_bar_menu_list.className = "css-1ontqvh";
    close_right_bar_menu.innerHTML = '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon" color="6d6d6d"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>';
    close_right_bar_menu.className = "css-uumkr9";
    close_right_bar_menu.id = "close-right-bar";
    right_bar_menu_list.appendChild(close_right_bar_menu);

    right_bar_menu.className = "MapRightbarMenu"
    right_bar_menu.appendChild(right_bar_menu_list)
    right_bar.appendChild(right_bar_menu)
}