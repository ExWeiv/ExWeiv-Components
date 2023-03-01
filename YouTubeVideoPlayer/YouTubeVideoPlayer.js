// For Velo API Reference documentation visit http://wix.to/94BuAAs
// To learn about widget code visit http://wix.to/bYYlE3S

$w.onReady(function () {
    // Initialize your widget here. If your widget has properties, this is a good place to read their values and initialize the widget accordingly.

    $w('#videoPlayer').onProgress((event) => {
        $widget.props.currentTime = event.target.currentTime;
    })
});

$widget.onPropsChanged((oldProps, newProps) => {
    // If your widget has properties, onPropsChanged is where you should handle changes to their values.
    // Property values can change at runtime by code written on the site, or when you preview your widget here in the App Builder.

    if (newProps.src) {
        $w('#videoPlayer').src = newProps.src;
    }
});

/**
 * @function
 * @description Plays the video
 */
export function play() {
    $w('#videoPlayer').play();
    $widget.fireEvent("Play", { source: "API" });
}

/**
 * @function
 * @description Pauses the video
 */
export function pause() {
    $w('#videoPlayer').pause();
    $widget.fireEvent("Pause", { source: "API" });
}

/**
 * @function
 * @param {number} duration
 * @description Skip to X duration of the video
 */
export function seek(duration) {
    $w('#videoPlayer').seek(duration);
}