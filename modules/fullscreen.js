
/**
slot="fullscreen-button"
Available when the slideshow has `controls="fullscreen"` enabled, this slot
allows the inclusion of html content into the fullscreen button. For an example,
this slot is useful for replacing the default icon with an inline SVG.

```html
<slide-show controls="fullscreen">
    <svg slot="fullscreen-button">
        <use href="#fullscreen-icon" />
    </svg>
</slide-show>
```
**/

import create   from '../../dom/modules/create.js';
import delegate from '../../dom/modules/delegate.js';
import events   from '../../dom/modules/events.js';
import { fullscreenEnabled, getFullscreenElement, enterFullscreen, exitFullscreen } from '../../dom/modules/fullscreen.js';

import { $data }          from './consts.js';


export function enable(host) {
    const data = host[$data];

    if (!fullscreenEnabled) {
        if (window.DEBUG) {
            console.warn('<slide-show> fullscreen mode not available in this browser, fullscreen controls not rendered');
        }

        return;
    }

    // Add an object to store navigation state
    const text = create('text', 'Open in fullscreen');
    const fullscreen = data.fullscreen = {
        text,
        button: create('button', {
            part: 'fullscreen-button',
            type: "button",
            name: "fullscreen",
            children: [
                create('slot', { name: 'fullscreen-button' }),
                text
            ]
        }),
    };

    data.controls.append(fullscreen.button);

    fullscreen.changes = events('fullscreenchange', host)
    .filter((e) => getFullscreenElement() === host)
    .each((e) => {
        // Setup fullscreen
        fullscreen.button.part.add('fullscreen-button-active');
        fullscreen.text.textContent = 'Close fullscreen';

        // In Chrome and FF, the fullscreen element receives focus without an
        // explicit tabIndex, in Safari we must encourage it by adding one.
        // When focus is inside a custom element document.activeElement points
        // to the host (or is this true only for closed shadows?)
        if (document.activeElement !== host) {
            fullscreen.tabIndex = host.tabIndex;
            if (host.tabIndex < 0) { host.tabIndex = 0; }
            host.focus();
        }

        // Setup fullscreen exit
        const fullscreenend = events('fullscreenchange', host)
        .each((e) => {
            fullscreen.button.part.remove('fullscreen-button-active');
            fullscreen.text.textContent = 'Open in fullscreen';
            host.tabIndex = fullscreen.tabIndex;
            fullscreen.tabIndex = undefined;
            fullscreenend.stop();
        });
    });

    fullscreen.clicks = data.clicks.each(delegate({
        '[name="fullscreen"]': (button, e) => {
            const fullscreenCurrent = getFullscreenElement();

            // Make button act as toggle: close the fullscreen
            if (fullscreenCurrent === host) {
                exitFullscreen();
                return;
            }

            if (fullscreenCurrent) {
                exitFullscreen();
            }

            enterFullscreen(host);
        }
    }));
}

export function disable(host) {
    const data = host[$data];
    const fullscreenCurrent = getFullscreenElement();

    if (fullscreenCurrent === host) {
        exitFullscreen();
    }

    data.fullscreen.button.remove();
    data.fullscreen.clicks.stop();
    data.fullscreen.changes.stop();
    data.fullscreen = undefined;
}

export function getState(host) {
    const data = host[$data];
    return !!data.fullscreen;
}
