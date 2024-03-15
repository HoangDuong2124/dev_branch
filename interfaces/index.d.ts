export interface IUser{
    id:number
    name:string
    email:string
    password:string
}

export interface INote{
    id:number
    idUser: number
    title?:string
    icon?:string
    background?:string
    content?:string
}

export interface Comment{
    id:number
    idUser:number
    idNote:number
    comment:string
    sentAt:Date
}

export interface IContext {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    icon: string;
    setIcon: React.Dispatch<React.SetStateAction<string>>;
    background: string;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
  }

  export interface sendComment{
    idUser:number
    idNote:number
    comment:string
  }
  export interface groupComment{
    id:number
    idUser:number
    idNote:number
    comment:string
    sentAt:Date
    user:{
        id:number
        name:string
    }
  }