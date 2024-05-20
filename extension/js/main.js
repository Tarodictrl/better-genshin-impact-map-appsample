function setActive(element)
{
    if (element == null || element == undefined)
    {
        return;
    }
    var presets = $(".preset");
    for (let i = 0; i < presets.length; i++) {
        presets[i].classList.remove("active");
    }
    saveLastSelectedPreset(element.getAttribute("name"));
    element.classList.add("active");
}


function toggleRightBar() {
    const rightBar = document.querySelector(".MapLayout_Rightbar ");
    const closeRightBarMenu = document.getElementById("close-right-bar");

    rightBar.classList.toggle("hide");
    const isHidden = rightBar.classList.contains('hide');
    closeRightBarMenu.innerHTML = isHidden ?
        `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon" color="6d6d6d"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>` :
        `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronRightIcon" color="6d6d6d"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>`;
}


var presets;

window.addEventListener('load', async function() {
    presets = await loadPresets();
    last_selected = await loadLastSelectedPreset();
    createPresetDiv();
    createRightBarmenu();
    drawPresets(presets);
    setActive(this.document.querySelector(`.preset[name="${last_selected}"]`))
    $("#save-preset-button").click(function(){
        var name = document.getElementById("preset-name").value;
        var ids = [];
        var markers = getMarkers("selected");
        for (let i = 0; i < markers.length; i++) {
            ids.push(getMarkerId(markers[i]));
        }
        presets[name] = Array.from(new Set(ids));;
        var element = addPreset(name, ids);
        savePresets(presets);
        setActive(element);
        document.getElementById("preset-name").value = '';
    })
    
    $("#close-right-bar").click(function(){
        toggleRightBar();
    })
})
