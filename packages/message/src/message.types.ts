export type IType = 'success' | 'warning' | 'info' | 'error'
export interface IMessageOptions {
    // 每弹出一个框 给他做一个标记
    id?: string,
    message?: string,
    type?: IType,
    duration?:number,
    center?:boolean,
    onClose?:()=>void,
    offset?:number
}
export type IMessageParams = IMessageOptions | string