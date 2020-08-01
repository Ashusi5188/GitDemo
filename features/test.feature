Feature: test feature
@Smoke
Scenario: search text
Given I naviate to angular website
When I click on Headel link
And I enter "Hello" in serach box
Then User naviagtes to Home page
@functional
Scenario: search text1
Given I naviate to angular website
When I click on Headel link
And I enter "Ashu" in serach box
Then User naviagtes to Home page
@smoke
Scenario: search text2
Given I naviate to "angular" website
When I click on Headel link
And I enter "Ashu" in serach box
Then User naviagtes to Home page
@regression
Scenario Outline:  search text3
Given I naviate to "angular" website
When I click on Headel link
And I enter "<key>" in serach box
Then User naviagtes to Home page
Examples:
    | key | 
    |hello|
    |def|
    |ghi|