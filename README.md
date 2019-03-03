# Commander.js Decorators
Small library  used to create [Commander js](https://github.com/tj/commander.js) command using Annotation.
## Installation

    $ npm install commanderjsdecorators
## Usage
Create a class with @command annotation as well as a method with the @action annotation.
### example
```typescript
import { command, action } from "commanderjsdecorators";
import commander from "commander";

@command({
  commander: commander,
  title: "XYZ",
  description: "saying hello",
  options: [
    { title: "-h, --hello [name]", description: "say hello" },
    { title: "-z, --sleep", description: "going to sleep" }
  ]
})
export class hello {
  @action()
  action(cmd: string, options: commander.Command) {
      console.log("launching hello");
      if(options.hello){
        console.log("hello: " + options.hello);
      }
      if(options.sleep){
        console.log("sleep: " + options.sleep);
      }
  }
}
```
Import the class for side effects only in you main file
```typescript
import "./hello";

//rest of your application

```
This is all you need. The reset of the commander configuration can be done the same as before.
Any class with the annotation will automatically be picked up by  [commander.js](https://github.com/tj/commander.js) ,will be displayed in  the help and execute the action when called.
## TODO
 - Add additional help annotation
 - Figure out what is still to do
