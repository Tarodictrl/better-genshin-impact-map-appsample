function getMarkers(type)
{
    var selected_buttons = [];
    switch (type)
    {
        case "selected":
            selected_buttons = document.querySelectorAll('.MuiBox-root > button.MuiButton-colorPrimary');
            break;
        case "unselected":
            selected_buttons = document.querySelectorAll('.MuiBox-root > button.MuiButton-containedInfo');
            break;
        default:
            selected_buttons = document.querySelectorAll(".MuiButton-root > button");
            break;
    }
    const uniqueButtons = Array.from(
        selected_buttons
      ).reduce((acc, button) => {
        const testId = button.getAttribute('data-testid');
        if (testId && !acc.some(btn => btn.getAttribute('data-testid') === testId)) {
          acc.push(button);
        }
        return acc;
      }, []);
    return uniqueButtons;
}


function getMarkerById(id)
{
    return document.querySelectorAll(`[data-testid="${id}"]`)[0];
}


function getMarkerId(marker)
{
    return marker.getAttribute('data-testid');
}


function clearAllmarker()
{
    var markers = getMarkers("selected");
    for (let i = 0; i < markers.length; i++) {
        markers[i].click();
    }
}