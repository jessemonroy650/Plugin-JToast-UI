# Plugin-JToast-UI
a popup notificaion, like toast(), that uses only HTML,CSS, and Javascript

[[LIVE DEMO]()] - [[BLOG]()]

- [Synopsis](#synopsis)
- [Methods](#methods)
  - [init()](#init)
  - [message()](#message)
  - [fire()](#fire)
  - [extinguish()](#extinguish)
- [Examples](#examples)
  - [toast()](#fire)
  - [alert()](#alert)
- [Attributes in the CSS](#attrib)

## <a name=synopsis>Synopsis</a> ##

This library is for local notifications. It use a `<div>` popup that uses `postion:absolute`. The notification has only one pane, and therefore only one window for a message. The notification is initially hidden and not visible. Once `fire()` is called, the notification goes through the process of becoming visible. 

The window can be customized via `init()` and `message()`. The window becomes visible with `fire()` and hidden with `extinguish()`. You should not have to use `toggle()`.

## <a name=method>Methods</a> ##

method        |  purpose
--------------|-----------
`init()`      | set the `id` and `timeout` to the window 
`message()`   | set the text and style to the message
`fire()`      | launch the message &ndash; making it visible
`extinguish()` | manually halt the message &ndash; making it hidden
`toggle()`    | actually make the window hidden and visible

**How the methods work**

If you look at the code, this is the sequence:

- `fire()` &mdash;> `init()` &mdash;> `message()` &mdash;> `toggle()`
- `extinguish()` &mdash;> `init()` &mdash;> `message()` &mdash;> `toggle()`

What should be evident is that the calls are scoping. Meaning you can call

- `init()`, `message()`, and `fire()` in sequence
- **_OR_** *just call*
- `fire()` with all the parameters that you would put in `init()` and `message()`

----
### <a name=init>`init(json)`</a> ###
Accepts a JSON with the following parameters:

- `id` - element `id` of the &lt;div&gt; you are using
- `timeout` - the amount of time to display the notification (in milliseconds)

### `toggle()` ###
NO parameters.

### <a name=message>`message(json)`</a> ###
accepts a JSON with the following parameters:

- `id` - element `id` of the &lt;div&gt; you are using
- `timeout` - the amount of time to display the notification (in milliseconds)
- `message` - text of message
- `class` - a CSS class with the attributes to use

### <a name=fire>`fire(json)`</a> ###

- Accepts the same JSON parameters as [`message()`](#message)

### <a name=extinguish>`extinguish(json, timeout)`</a> ###

- Accepts the same JSON parameters as [`message()`](#message), except timeout is separate
- `timeout` - the amount of time to **wait before hiding** the notification (in milliseconds)

*NOTE:* The `timeout` in this method is separate because it is the \*timeout\* before the notification starts to fade. However, if you do *not* give a \*timeout\* then the notification immediately starts to fade to invisibile.

## <a name=examples>Examples</a> ##

### <a name=toast>toast()</a> ###

**HTML**

    <div id=jtoast class=jtoast></div>

**code**

    `jtoast.fire({'message':'I am toast.'});`

**explanation**

Calls `jtoast.fire()` with a *message*. It will "fade out" after the default `timeout`. Use `jtoast.init()` to change the `timeout`.

### <a name=alert>alert()</a> ###

**HTML**

    <div id=alert class=jtoast></div>

**code**

    jtoast.init({'id':'alert','timeout':5000});
    jtoast.message({
       'message':'<p>This is another messge.<p>This works the with HTML inside it.<p>',
       'class':'alert',
    });
    jtoast.fire();

**explanation**

1. Select the div with `id=alert` and set the `timeout` to 5000 (5 seconds)
2. call `jtoast.message()`
3. Set the text to the notification
4. Modify the class of the message box with the class `alert`
5. close the call
6. launch the notification and have it automatically fade after the `timeout` (5 seconds).

## <a name=attrib>Important Appearance Attributes in the CSS</a> ##

In `jtoast.css`:

- Change the background color with `background-color:`
- `position:absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- `top:` and `left:` where the jtoast is placed relative to the "top,left" of the screen.
- `height:` and `width:` the size of the jtoast.
