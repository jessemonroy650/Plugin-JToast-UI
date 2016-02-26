# Plugin-JToast-UI
a popup notificaion, like toast(), that uses only HTML,CSS, and Javascript

[[LIVE DEMO]()] - [[Blog]()]

## Synopsis ##

This library is local notifications. It use a popup `<div>` that uses `postion:absolute`. The notification has only one pane, and therefore only one window for a message. The notification is initially hidden and not visible. Once `fire()` is called, the notification goes through the process of being visible. 

The window can be customized via `init()` and `message()`. The window becomes visible with `fire()` and hidden with `extingish()`. 

## Methods ##

method        |  purpose
--------------|-----------
`init()`      | set the `id` and `timeout` to the window 
`toggle()`    | actually make the window hidden and visible
`message()`   | set the text and style to the message
`fire()`      | launch the message, making it visible
`extingish()` | manually halt the message, making it hidden


#### `init()` ####
- `id`
- `timeout` 

#### `toggle()` ####
no parameters

#### `message()` ####
- `message`
- `class`

#### `fire()` ####
- `message`
- `class`

#### `extingish()` ####
- `message`
- `class`
- `timeout` 



## Examples ##

## <a name=toast>toast()</a> ##

**HTML**

    <div id=toast class=toast></div>

**code**

1. `jtoast.fire({'message':'I am toast.'});`

**explanation**

Calls `jtoast.fire()` with a *message*. It will "fade out" after the default `timeout`. Use `jtoast.init()` to change the `timeout`.

## <a name=alert>alert()</a> ##

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
2. Set the message with `jtoast.message()`
3. Set the actual message
4. Modify the class of the message box with the class `alert`
5. close the call
6. launch the message box and have it automatically fade after the `timeout` (5 seconds).

### How It Use it ###

abc

### Important Appearance Attributes in the CSS ##

In `jtoast.css`:

- Change the background color with `background-color:`
- `position:absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- `top:` and `left:` where the jtoast is placed relative to the "top,left" of the screen.
- `height:` and `width:` the size of the jtoast.
