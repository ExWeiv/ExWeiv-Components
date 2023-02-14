/**
 * @function
 * @description Gets Input Element from Widget
 * @returns {$w.TextInput} 
 */
export function getElement() {
    return $w('#inputElement');
}

/**
 * @function
 * @description Change Icon Source
 * @returns undefined
 */
export function changeIcon(newIconUrl) {
    $w('#icon').src = newIconUrl;
    $widget.fireEvent("onIconChange", newIconUrl);
}