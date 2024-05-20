async function loadPresets()
{
    var presets = {"default": []}
    const data = await chrome.storage.sync.get("presets");
    if (data != undefined)
    {
        Object.assign(presets, data.presets);
    }
    return presets
}

async function loadLastSelectedPreset()
{
    var selected = "default";
    const data = await chrome.storage.sync.get("selected");
    if (data != undefined)
    {
        selected = data.selected;
    }
    return selected
}


function savePresets(data)
{
    chrome.storage.sync.set({ 'presets': data });
}

function saveLastSelectedPreset(data)
{
    chrome.storage.sync.set({ 'selected': data });
}
