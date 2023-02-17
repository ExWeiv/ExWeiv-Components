/**
 * @function
 * @description Gets Input Element from Widget
 * @returns {$w.Button} 
 */
export function getElement() {
    return $w('#buttonElement');
}

/**
 * @function
 * @description Change Icon Source
 * @returns undefined
 */
export function changeIcon(newIconUrl) {
    $w('#buttonElement').icon = newIconUrl;
    $widget.fireEvent("onIconChange", newIconUrl);
}