function incrementValue()
{
    const value = parseInt(document.getElementByTagId('contador').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('contador').value = value;
}