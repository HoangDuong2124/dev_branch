export interface IUser{
    id:number
    name:string
    email:string
    password:string
}

export interface INote{
    id:string
    title:string
    icon:string
    background:string
    comment:string
    content:string
}

export interface Comment{
    id:number
    idUser:number
    idNote:string
    comment:string
    sentAt:Date
}