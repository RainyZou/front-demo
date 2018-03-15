import {Subject} from "rxjs/Subject";

export class RightSubject {

    private rightSubject = new Subject();

    public rightNext(msg: string) {
        var message: string = msg;
        this.rightSubject.next(message);
        console.log(this.rightSubject);
    }

    public rightSubscribe(paramCallback: Function) {
        this.rightSubject.subscribe({
            next: function (msg: any) {
                console.log(msg);
                paramCallback(msg);
                return true;
            }
        });
    }
}