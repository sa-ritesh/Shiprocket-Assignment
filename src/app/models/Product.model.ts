export class Product{
    public name:String='';
    public price:Number=0;
    public ratings:Number=0;
    public category:String='';
    public images:[{public_id:String,url:String,_id:String}]=[{public_id:'',url:'',_id:''}];
    constructor(name:String,price:number,ratings:number,category:string){
        this.name=name;
        this.price=price;
        this.ratings=ratings;
        this.category=category;
    }
}