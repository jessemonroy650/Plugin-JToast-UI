# Plugin-JToast-UI
a popup notificaion, like toast(), that uses only HTML,CSS, and Javascript

[[LIVE DEMO]()] - [[Blog]()]

## Synopsis ##

This library 

## Methods ##

`method()`

## Examples ##

## <a name=toast>toast()</a> ##

**HTML**

    <div id=toast class=toast><span id=message></span></div>

**code**

1. `jtoast.fire({'message':'I am toast.'});`

**explanation**

Calls `jtoast.fire()` with a *message*. It will "fade out" after the default `timeout`. Use `jtoast.init()` to change the `timeout`.


### How It Use it ###

abc

### Important Appearance Attributes in the CSS ##

In `jtoast.css`:

- Change the background color with `background-color:`
- `position:absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- `top:` and `left:` where the jtoast is placed relative to the "top,left" of the screen.
- `height:` and `width:` the size of the jtoast.
