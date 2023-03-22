import { Injector } from "@angular/core";
import { SnackbarService } from "./snackbar.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "../Service/api.service";
export abstract class commonBase{
    public snackbar:SnackbarService;
    public apiservice:ApiService;
    public fb :FormBuilder = new FormBuilder 
    constructor(public injector:Injector){
        this.snackbar = injector.get(SnackbarService)
        this.apiservice = injector.get(ApiService)
    }
    SUCCESS_CODE = 200;

  public destinationData = [
    {
      country:'Antarctica',
      spots:'Antarctica',
      priceFrom:'200',
      priceTo:'500',
      image:'assets/Images/AmazingPlace/Antarctica.webp',
    },
    {
      country:'Arashiyama Bamboo Grove',
      spots:'Japan',
      priceFrom:'350',
      priceTo:'500',
      image:'assets/Images/AmazingPlace/Arashiyama Bamboo Grove, Japan.webp',
    },
    {
      country:'Cappadocia',
      spots:'Turkey',
      priceFrom:'100',
      priceTo:'250',
      image:'assets/Images/AmazingPlace/Cappadocia, Turkey.webp',
    },
    {
      country:'Cliffs of Moher',
      spots:'Ireland',
      priceFrom:'500',
      priceTo:'750',
      image:'assets/Images/AmazingPlace/Cliffs of Moher, Ireland.webp',
    },
    {
      country:'Galápagos Islands',
      spots:'Ecuador',
      priceFrom:'500',
      priceTo:'700',
      image:'assets/Images/AmazingPlace/Galápagos Islands, Ecuador.webp',
    },
    {
      country:'Na Pali Coast',
      spots:'Hawaii',
      priceFrom:'100',
      priceTo:'650',
      image:'assets/Images/AmazingPlace/Na Pali Coast, Hawaii.webp',
    },
    {
      country:'The Azores',
      spots:'Portugal',
      priceFrom:'250',
      priceTo:'750',
      image:'assets/Images/AmazingPlace/The Azores, Portugal.webp',
    }
  ]
}