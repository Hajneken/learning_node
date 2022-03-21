# Events and Event Emiters

Event := occurence that has happened to which we can react

In node 2 different kind of events:

- System Events (comes from C++ core, `libuv`)
- Custom Events (JavaScript Core, **Event Emitter**)

System Events are translated as Custom Event

> There is no concept of event in JavaScript, it's "faked"

magic string: a string that has a special meaning in the code
-> relying on magic strings may be problematic and error prone

To make sure no such problem occurs establish a `config.js` with events 