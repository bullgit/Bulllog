# Bulllog.js

Why bother logging ugly Messages to your console when you can also log fancy bullshit? 

### Usage:

Just include the amazingly small bulllog.min.js into your page and initialize it as followed

```javascript
var log = new Bulllog({
  'font-size': '3em',
  color: '#1393d5',
  background: '#333',
  padding: '0.25em'
});

log.msg('VIVA LA BULLGIT!');
```

You can pass any CSS property value pair you'd like. If it works or not is up to your console I guess. Notize that any property with a hypen (-) need to be written in quotes, just like "font-size". There are no default values so log.msg('test') will give you a standard console log. 
**Notice:** This works only in Chrome.
