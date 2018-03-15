import {CommandMeta} from "./command.meta";

export class ServiceMeta {

    serviceId: string;

    serviceType: string;

    commands: Array<CommandMeta>=new Array<CommandMeta>(0);
}