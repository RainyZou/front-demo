import {Subject} from "rxjs/Subject";

export class LeftSubject {

    private leftSubject = new Subject();

    public leftNext(msg: string) {
        var message: string = msg;
        this.leftSubject.next(message);
        console.log(this.leftSubject);
    }

    public leftSubscribe(paramCallback: Function) {
        this.leftSubject.subscribe({
            next: function (msg: any) {
                console.log(msg);
                paramCallback(msg);
                return true;
            }
        });
    }
}