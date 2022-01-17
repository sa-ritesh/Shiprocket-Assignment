export class Product{
    public name:String='';
    public price:Number=0;
    public rating:Number=0;
    public category:String='';
    constructor(name:String,price:number,rating:number,category:string){
        this.name=name;
        this.price=price;
        this.rating=rating;
        this.category=category;
    }
}