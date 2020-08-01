import {browser} from 'protractor';
import {element,by} from 'protractor';
import {AngularHomePage} from './pageobjects/angulajsHomePage';

describe('angularjs homepage todo list', function() {
    it('should add a todo', async()=> {
      browser.get('https://angularjs.org');
  
    await  element(by.model('todoList.todoText')).sendKeys('write first protractor test');
     await element(by.css('[value="add"]')).click();
  
      var todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(3);
     await expect(todoList.get(2).getText()).toEqual('write first protractor test');
  
      // You wrote your first test, cross it off the list
      todoList.get(2).element(by.css('input')).click();
      var completedAmount = element.all(by.css('.done-true'));
    await  expect(completedAmount.count()).toEqual(2);
    });
    it('Angulal JS Homepage title validation' ,async()=>{
     let angularhomepage=new AngularHomePage();
     await browser.get("https://angularjs.org/");
     await angularhomepage.link.click();
     browser.sleep(1000);
     await angularhomepage.searbox.sendKeys("Hello");
    });
  });