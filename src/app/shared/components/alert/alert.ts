export class Alert{

    constructor(public readonly alertType: AlertType, public readonly message: string){}

    getMessage(){
        
    }

}

export enum AlertType{
    
    SUCCESS,
    WARNING,
    DANGER,
    INFO

}

