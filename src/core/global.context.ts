//import {Subject} from "rxjs/Subject";

'use strict';

export const SUCCESS = "000000";


export const BASE_URL: string = 'http://localhost:8380/iot-web/rs/ws/';

//设备
export const DEVICE_INIT_URL: string = BASE_URL + "iot/management/device/init";
export const DEVICE_PAGE_URL: string = BASE_URL + "iot/management/device/page";

//设备拥有的服务命令列表
export const DEVICE_DOWNMETA_URL: string = BASE_URL + "iot/management/device/downMeta";

//下发
export const DOWNLINK_URL: string = BASE_URL + "iot/management/downlink";
export const DOWNLINK_PAGE_URL: string = BASE_URL + "iot/management/downlink/page";

//上行
export const UPLINK_PAGE_URL: string = BASE_URL + "iot/management/uplink/page";

//产品
export const PRODUCT_CREATE_URL: string = BASE_URL + "iot/management/product/create";
export const PRODUCT_PAGE_URL: string = BASE_URL + "iot/management/product/page";

//服务
export const SERVICE_CREATE_URL: string = BASE_URL + "iot/management/service/create";
export const SERVICE_PAGE_URL: string = BASE_URL + "iot/management/service/page";

//属性
export const PROPERTY_CREATE_URL: string = BASE_URL + "iot/management/property/create";
export const PROPERTY_PAGE_URL: string = BASE_URL + "iot/management/property/page";

//命令
export const COMMAND_CREATE_URL: string = BASE_URL + "iot/management/command/create";
export const COMMAND_PAGE_URL: string = BASE_URL + "iot/management/command/page";

//参数
export const PARA_CREATE_URL: string = BASE_URL + "iot/management/para/create";
export const PARA_PAGE_URL: string = BASE_URL + "iot/management/para/page";

//配置刷新
export const MODELDATA_REFRESH_URL: string = BASE_URL + "iot/management/modeldata/refresh";

//插件
export const PLUGINS_PAGE_URL: string = BASE_URL + "iot/management/plugins/page";
export const PLUGINS_DEPLOY_URL: string = BASE_URL + "iot/management/plugins/deploy";

