$w.onReady(function () {
    // Initialize your widget here. If your widget has properties, this is a good place to read their values and initialize the widget accordingly.

    $widget.props.inputType = $w('#inputElement').inputType;
    $widget.props.max = $w('#inputElement').max;
    $widget.props.min = $w('#inputElement').min;
    $widget.props.numberSpinnerHidden = $w('#inputElement').numberSpinnerHidden;

    Object.keys($w('#inputElement').style).forEach((key) => {
        $widget.props.style[key] = $w('#inputElement').style[key];
    })

    Object.keys($w('#inputElement').validity).forEach((key) => {
        $widget.props.validity[key] = $w('#inputElement').validity[key];
    })

    $widget.props.value = $w('#inputElement').value;
    $widget.props.label = $w('#inputElement').label;
    $widget.props.rendered = $w('#inputElement').rendered;
    $widget.props.global = $w('#inputElement').global;
    $widget.props.type = $w('#inputElement').type;
    $widget.props.valid = $w('#inputElement').valid;
    $widget.props.validationMessage = $w('#inputElement').validationMessage;
    $widget.props.hidden = $w('#inputElement').hidden;
    $widget.props.isVisible = $w('#inputElement').isVisible;
    $widget.props.collapsed = $w('#inputElement').collapsed;
    $widget.props.enabled = $w('#inputElement').enabled;
    $widget.props.maxLength = $w('#inputElement').maxLength;
    $widget.props.placeholder = $w('#inputElement').placeholder;
    $widget.props.readOnly = $w('#inputElement').readOnly;
    $widget.props.required = $w('#inputElement').required;

    $w('#inputElement').onMouseIn((event) => { $widget.fireEvent("onMouseIn", event) });
    $w('#inputElement').onMouseOut((event) => { $widget.fireEvent("onMouseOut", event) });
    $w('#inputElement').onViewportEnter((event) => { $widget.fireEvent("onViewportEnter", event) });
    $w('#inputElement').onViewportLeave((event) => { $widget.fireEvent("onViewportLeave", event) });
    $w('#inputElement').onChange((event) => { $widget.fireEvent("onChange", event) });
    $w('#inputElement').onInput((event) => { $widget.fireEvent("onInput", event) });
    $w('#inputElement').onBlur((event) => { $widget.fireEvent("onBlur", event) });
    $w('#inputElement').onFocus((event) => { $widget.fireEvent("onFocus", event) });
    $w('#inputElement').onClick((event) => { $widget.fireEvent("onClick", event) });
    $w('#inputElement').onDblClick((event) => { $widget.fireEvent("onDblClick", event) });
});

$widget.onPropsChanged((oldProps, newProps) => {
    // If your widget has properties, onPropsChanged is where you should handle changes to their values.
    // Property values can change at runtime by code written on the site, or when you preview your widget here in the App Builder.

    Object.keys(newProps).forEach((apiKey) => {
        if (apiKey === 'style') {
            $w('#inputElement').style[apiKey] = newProps[apiKey];
        } else if (apiKey === 'validity') {
            $w('#inputElement').validity[apiKey] = newProps[apiKey];
        } else {
            $w('#inputElement')[apiKey] = newProps[apiKey];
        }
    })
});

/**
 * @function
 * @description Hides the number spinner for a numeric text input.
 */
export function hideNumberSpinner() {
    $w('#inputElement').hideNumberSpinner();
}

/**
 * @function
 * @description Shows the number spinner for a numeric text input.
 */
export function showNumberSpinner() {
    $w('#inputElement').showNumberSpinner();
}

/**
 * @function
 * @description Scrolls the page to the top of the element using an animation.
 */
export function scrollTo() {
    $w('#inputElement').scrollTo();
}

/**
 * @function
 * @description Resets the element's visual validity indication.
 */
export function resetValidityIndication() {
    $w('#inputElement').resetValidityIndication();
}

/**
 * @function
 * @description Updates the element's visual validity indication based on its current validity state.
 */
export function updateValidityIndication() {
    $w('#inputElement').updateValidityIndication();
}

/**
 * @function
 * @description Hides the element and sets its hidden property to true, using an effect if specified.
 */
export function hide(effectName = undefined, effectOptions = undefined) {
    $w('#inputElement').hide(effectName, effectOptions);
}

/**
 * @function
 * @description Shows the element and sets its hidden property to false, using an effect if specified.
 */
export function show(effectName = undefined, effectOptions = undefined) {
    $w('#inputElement').show(effectName, effectOptions);
}

/**
 * @function
 * @description Collapses the element and sets its collapsed property to true.
 */
export function collapse() {
    $w('#inputElement').collapse();
}

/**
 * @function
 * @description Expands the element and sets its collapsed property to false.
 */
export function expand() {
    $w('#inputElement').expand();
}

/**
 * @function
 * @description Disables the element and sets its enabled property to false.
 */
export function disable() {
    $w('#inputElement').disable();
}

/**
 * @function
 * @description Enables the element and sets its enabled property to true.
 */
export function enable() {
    $w('#inputElement').enable();
}

/**
 * @function
 * @description Removes focus from the element.
 */
export function blur() {
    $w('#inputElement').blur();
}

/**
 * @function
 * @description Places focus on the element.
 */
export function focus() {
    $w('#inputElement').focus();
}

/**
 * @function
 * @description Adds an event handler that runs when the element's validation is checked.
 * @param {$w.Validator} validator 
 * @param {boolean} override
 */
export function onCustomValidation(validator, override) {
    $w('#inputElement').onCustomValidation(validator, override);
}