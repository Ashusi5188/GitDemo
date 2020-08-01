"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const angulajsHomePage_1 = require("../pageobjects/angulajsHomePage");
const chai_1 = __importDefault(require("chai"));
let angularhomepage = new angulajsHomePage_1.AngularHomePage();
var expect = chai_1.default.expect;
cucumber_1.Given('I naviate to angular website', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://angularjs.org/");
}));
cucumber_1.Given('I naviate to {string} website', (string) => __awaiter(this, void 0, void 0, function* () {
    if (string == 'angular') {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('I click on Headel link', () => __awaiter(this, void 0, void 0, function* () {
    yield angularhomepage.link.click();
}));
cucumber_1.When('I enter {string} in serach box', (string) => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.sleep(1000);
    yield angularhomepage.searbox.sendKeys(string);
    expect("hello").to.equal(string);
}));
cucumber_1.Then('User naviagtes to Home page', function () {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywyQ0FBcUM7QUFDckMsc0VBQWtFO0FBQ2xFLGdEQUEwQjtBQUMxQixJQUFJLGVBQWUsR0FBQyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztBQUMxQyxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBR3ZCLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBUSxFQUFFO0lBRTlDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3BELElBQUcsTUFBTSxJQUFFLFNBQVMsRUFBQztRQUNsQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDOUM7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEdBQVEsRUFBRTtJQUN2QyxNQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3JELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2QkFBNkIsRUFBRTtBQUVwQyxDQUFDLENBQUMsQ0FBQyJ9