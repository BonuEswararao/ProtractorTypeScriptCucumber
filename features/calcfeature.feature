Feature: Calculator Functionality
@firstTest
Scenario: Calculator

Given i will navigate to cal page
When i enter numbers "3" and "5"
Then result should be "8"
