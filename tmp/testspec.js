"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const angulajsHomePage_1 = require("./pageobjects/angulajsHomePage");
describe('angularjs homepage todo list', function () {
    it('should add a todo', () => __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get('https://angularjs.org');
        yield protractor_2.element(protractor_2.by.model('todoList.todoText')).sendKeys('write first protractor test');
        yield protractor_2.element(protractor_2.by.css('[value="add"]')).click();
        var todoList = protractor_2.element.all(protractor_2.by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        yield expect(todoList.get(2).getText()).toEqual('write first protractor test');
        // You wrote your first test, cross it off the list
        todoList.get(2).element(protractor_2.by.css('input')).click();
        var completedAmount = protractor_2.element.all(protractor_2.by.css('.done-true'));
        yield expect(completedAmount.count()).toEqual(2);
    }));
    it('Angulal JS Homepage title validation', () => __awaiter(this, void 0, void 0, function* () {
        let angularhomepage = new angulajsHomePage_1.AngularHomePage();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield angularhomepage.link.click();
        protractor_1.browser.sleep(1000);
        yield angularhomepage.searbox.sendKeys("Hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDJDQUFzQztBQUN0QyxxRUFBK0Q7QUFFL0QsUUFBUSxDQUFDLDhCQUE4QixFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFPLEVBQUU7UUFDL0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUV2QyxNQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckYsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU5QyxJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUU5RSxtREFBbUQ7UUFDbkQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pELElBQUksZUFBZSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxHQUFPLEVBQUU7UUFDbkQsSUFBSSxlQUFlLEdBQUMsSUFBSSxrQ0FBZSxFQUFFLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9