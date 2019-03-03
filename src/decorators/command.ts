import { CommandConfig } from "../Interfaces/CommandConfig";
export function command(config: CommandConfig) {
  return (constructor: Function) => {
    const props = Object.getOwnPropertyDescriptors(constructor.prototype);
    for (const prop of Object.values(props)) {
      if (!!prop.value.isAction) {
        const command = config.commander.command(config.title);
        command.description(config.description);
        for (const option of config.options) {
          command.option(option.title, option.description);
        }
        command.action(prop.value);
      }
    }
  };
}
