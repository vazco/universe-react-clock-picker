# React TimePicker
<img src="https://raw.githubusercontent.com/vazco/universe-react-clock-picker/master/timepicker.jpg"/>

## [DEMO](http://react-clock-picker.meteor.com)
Check it out here: [demo](http://react-clock-picker.meteor.com)


## Instalation

```
 meteor add universe:react-clock-picker
```

## Usage
This Component is dedicated to work with universe:modules, but you can use it without universe:modules as a global `_TimePicker`

ES6:
```
import TimePicker from '{universe:react-clock-picker}';
//Your code
```

SystemJS:

```
System.import('{universe:react-clock-picker}').then(function(module) {
var TimePicker = module.TimePicker;
 //Your code
});
```

Global
```
var TimePicker = _TimePicker;
//Your code
```

## Example
```
import TimePicker from '{universe:react-clock-picker}';
const now  = new Date();
// In render:
<TimePicker
        size   = { 300 }
        radius = { 125 }

        hours   = { now.getHours() }
        minutes = { now.getMinutes() }
        onChange={ ({ hours, minutes })=> console.log(hours, minutes); }
        militaryTime = { true }
        />
````