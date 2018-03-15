import {DatePipe} from "@angular/common";

export class DownlinkVo {

    downlinkId: string

    orderNum: string

    deviceId: string

    devEui: string

    appId: string

    appEui: string

    payload: string

    status: string

    sendDate: DatePipe;

    backDate: DatePipe;
}