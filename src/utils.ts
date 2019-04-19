export const errorMessage=(str:string):string=>{
  return str.split(":")[1]
};

export const dateParser = (date:string):string=>{
  const now:any = new Date()
  const timestamp:any = new Date(date)
  const diff:number = now-timestamp;
  const hour:number = Math.floor(diff/3600000)
  if(hour<24){
    return `${hour} 시간전`
  }else{
    return `${timestamp.getFullYear()}년 ${timestamp.getMonth()}월 ${timestamp.getDay()}일`
  }
}