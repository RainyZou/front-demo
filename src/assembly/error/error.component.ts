


import {Component, OnInit} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'Error',
    template:'<h1>error</h1>'
})
export class ErrorComponent  implements OnInit{

    ngOnInit(): void {
        console.log("参数为空1");
    }

}