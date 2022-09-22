# Async Code, Buffers and Streams

> BIG TAKEAWAY:  When given chance always use asynchronous approach whenever available and use streams 

buffer: temporary storage for data meant to be moved 

stream: sequence of data 

- character set: a representation of characters with numbers

- character encoding: how characters are stored in binary
    

synchronous  :  single process executing at one time a.k.a. one line at the time 

non-blocking : doing other things without stopping your code from running 

> JavaScript is synchronous

> Node is asynchronous

Character ⇒ ASCII code ⇒ Binary 

Character ⇒ Character Set ⇒ Character Encoding

since ES6 we can work with binary data using *TypedArray* e.g.: 
* Int8Array
* Uint8Array
* Int32Array

=> these are views that let me see the underlying binary data in chosen format

*callback* : function that is passed to another function as an argument and is invoked later 

*error first callbacks* : standard pattern in node, callbacks in node have error as it's first parameter, null if no error, object otherwise

*chunk* : piece of data sent through a stream 

streams are event emitters 

types of streams: 
* readable (can only view incoming data) 
* writable (can only send data)
* duplex (can both read and write to the stream)
* transform (change the data while in stream -> duplex)

*abstract class* : constructor that we don't use directly but only inherit from

difference between *abstract class* and *interface* => abstract class can implement the functionality, interface cannot implement it 

Why Do we work with streams? 
> It allows us to do intensive operations without running out of memory.

*chunk* : data split in a pieces, this piece of data is sent through a stream 

*pipe* : connecting 2 streams, write to one stream what is read from the other 

Using `.pipe()` we can do method chaining 

Readable Stream => Writable Stream