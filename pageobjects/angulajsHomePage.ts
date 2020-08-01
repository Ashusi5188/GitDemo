import { ElementFinder,element,by } from "protractor";

export class AngularHomePage{

    link:ElementFinder;
    searbox:ElementFinder;
    constructor(){
      this.link=element(by.xpath("//a[contains(text(),'angular.io')]"));
      this.searbox=element(by.xpath("//input[@placeholder='Search']"));
	  this.searbox1=element(by.xpath("//input[@placeholder='Search']"));
	  this.searbox2=element(by.xpath("//input[@placeholder='Search']"));
	  
    }
}