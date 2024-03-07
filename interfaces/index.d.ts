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

export interface IContext {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    icon: string;
    setIcon: React.Dispatch<React.SetStateAction<string>>;
    background: string;
    setBackground: React.Dispatch<React.SetStateAction<string>>;
  }
