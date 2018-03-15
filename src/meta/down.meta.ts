import {ServiceMeta} from "./service.meta";

export class DownMeta {

    deviceId: string;

    devEui: string;

    productId: string;

    services: Array<ServiceMeta>=new Array<ServiceMeta>(0);
}