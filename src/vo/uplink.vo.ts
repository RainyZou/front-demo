import {DatePipe} from "@angular/common";

export class UplinkVo {

    uplinkId: string;

    deviceId: string;

    devEui: string;

    appId: string;

    appEui: string;

    payload: string;

    dataModel: string;

    dataPayload: string;

    dataMerge: string;

    createDate: DatePipe;
}