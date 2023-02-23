/**
 * @function
 * @description Gets Input Element from Widget
 * @returns {$w.Switch} 
 */
export function getElement() {
    return $w('#switchElement');
}

/**
 * @function
 * @description Change Text of Switch
 * @returns undefined
 */
export function changeText(newText) {
    $w('#text').text = newText;
    $widget.fireEvent("TextChange");
}