# Plugin-JToast-UI
A popup notificaion, like toast(), that only uses HTML5, CSS3, and Javascript.

[\[LIVE DEMO\]](http://codesnippets.altervista.org/examples/html5/tutorial-toast/) - [\[BLOG\]]()

- [Synopsis](#synopsis)
- [Methods](#methods)
  - [init()](#init)
  - [message()](#message)
  - [fire()](#fire)
  - [extinguish()](#extinguish)
  - [Why two (2) `timeout`](#timeout)
- [Examples](#examples)
  - [toast()](#fire)
  - [alert()](#alert)
- [Attributes in the CSS](#attrib)

## <a name=synopsis>Synopsis</a> ##

This library is for local notifications. It uses a `<div>` popup that gets positioned with `postion:absolute`. The notification has only one pane, and therefore only one window for a message. This means no title or subject. Hence, the name *jtoast*.

The notification is initially hidden and not visible. Once `fire()` is called, the notification goes through the process of becoming visible. `extinguish()` is used to make the notification hidden and invisible again.

## <a name=method>Methods</a> ##

There are five (5) methods for this library. If you need it quick, just used `fire()` or `extinguish()`. For more grainular control, there is `init()` and `message()`.

The notification can be customized via `init()` and `message()`. The purpose of `fire()` is to make a notification visible, and with `extinguish()` the notification becomes hidden. You should not have to use `toggle()`.

method         |  purpose
---------------|-----------
`init()`       | set the `id` and `timeout` to the notifications 
`message()`    | set the text and *class* to the message
`fire()`       | launch the message &ndash; making it visible
`extinguish()` | manually halt the message &ndash; making it hidden
`toggle()`     | actually make the notifications visible and hidden

**How the methods work**

If you look at the code, this is the sequence:

- `fire()` &mdash;> `init()` &mdash;> `message()` &mdash;> `toggle()`
- `extinguish()` &mdash;> `init()` &mdash;> `message()` &mdash;> `toggle()`

What may not be evident is that the calls are scoping. Meaning you can call

- `init()`, `message()`, and `fire()` in sequence
- **_OR_** *just call*
- `fire()` with all the parameters that you would put in `init()` and `message()`

----
### <a name=init>`init(json)`</a> ###
Accepts a JSON with the following parameters:

- `id` - element `id` of the &lt;div&gt; you are using. *Defaults to 'jtoast'.*
- `timeout` - the amount of time to display the notification (in milliseconds) before fading out. If set to zero ('0'=string), then it never fades.  *Defaults to 7000 (milliseconds - 7 seconds).*

### `toggle()` ###
NO parameters.

### <a name=message>`message(json)`</a> ###
Accepts a JSON with the following parameters:

- `id` - the element `id` of the &lt;div&gt; you are using. *Defaults to 'jtoast'.*
- `timeout` - the amount of time to display the notification (in milliseconds) before fading out. If set to zero ('0'=string), then it never fades.  *Defaults to 7000 (milliseconds - 7 seconds).*
- `message` - the text of message. *Defaults to no change in the text.*
- `class` - CSS class(es) with the attributes to use. *Defaults to 'jtoast'.*

### <a name=fire>`fire(json)`</a> ###

- Accepts the same JSON parameters as [`message()`](#message)

### <a name=extinguish>`extinguish(json, timeout)`</a> ###

- Accepts the same JSON parameters as [`message()`](#message), except timeout is separate
- `timeout` - the amount of time to **wait before hiding** the notification (in milliseconds). If set to zero (0=string), then it immediately fades. *Defaults to immediate fade.*

### <a name=timeout>Why two `timeout`</a> ###

If you look closely, you will notice `timeout` mentioned twice. In one case, `timeout` is listed with the JSON; so it is in the JSON given to `fire()` (et al.). In the other case, you will notice that `timeout` is separate, and given as a separate parameter to `extinguish()`.

With `fire()`, the `timeout` is the \*time\* before the notification starts to fade. If you do not set the `timeout`, it defaults to 7000 milliseconds (7 seconds). If you set `timeout='0'` (zero as a string), then it \*never fades\*.

With `extinguish()`, the `timeout` is still the \*time\* before the notification starts to fade. However, if you do *not* give a \*timeout\* then the notification immediately starts to fade.  If you set `timeout='0'` (zero as a string), then it \*immediately fades\*. CAVEAT: DO NOT USE BOTH `timeout` WITH `extinguish()`, WIERD THINGS CAN HAPPEN.

In summation, there are two (2) different `timeout` because each one behaves differently. In one case, it is the time to automatic "fade out". In the other case, it does the same. However, if you fail to set `timeout` or you use `timeout='0'`, then it behaves differently in both cases. This is why it is separate.

## <a name=examples>Examples</a> ##

### <a name=toast>toast()</a> ###

**HTML**

    <div id=jtoast class=jtoast></div>

**code**

    jtoast.fire({'message':'I am toast.'});

**explanation**

Calls `jtoast.fire()` with a *message*. It will "fade out" after the default `timeout`. Use `jtoast.init()` to change the `timeout`.

### <a name=alert>alert()</a> ###

**HTML**

    <div id=alert class=jtoast></div>

**code**

    jtoast.init({'id':'alert','timeout':5000});
    jtoast.message({
       'message':'<p>This is another messge.<p>This works the with HTML inside it.<p>',
       'class':'custom',
    });
    jtoast.fire();

**line by line explanation**

1. Select the div with `id=alert` and set the `timeout` to *5000* (5 seconds).
2. Open the call to `jtoast.message()`.
3. Set the text to the notification.
4. Modify the class of the message box with the class *custom*
5. Close the call
6. Launch the notification and have it automatically fade after the `timeout` (5 seconds).

## <a name=attrib>Important Appearance Attributes in the CSS</a> ##

In `jtoast.css`:

- `background-color:` changes the background color.
- `position:absolute;` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- `top:` and `left:` where the jtoast is placed relative to the "top,left" of the screen.
- `height:` and `width:` the size of the jtoast.
