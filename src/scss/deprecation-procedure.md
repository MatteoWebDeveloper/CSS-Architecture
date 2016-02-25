# Deprecation procedure

Refactoring and deprecation are an important procedure to optimize and maintain your codebase.
The procedure consist in the following steps:

## 1) Analysis
- code review team css code
- do a global code review sometimes
- gulp css-lint
- gulp css-unused
- gulp css-deprecated
- check general css quality [here](http://cssstats.com/)
- check general css quality (2) [here](http://www.testmycss.com/)
- check specificity [here](https://decadecity.net/sprue/css-specificity-graph)
- check specificity (2) [here](https://jonassebastianohlsson.com/specificity-graph/)

## 2) Plan a strategy
Provide a solution to improve the css architecture.
Once you create a new standard, you can define the old a deprecated code.

## 3) Warning deprecation (15-30 days)
Add class inside the css-deprecated config, providing the instruction to implement the new standard.
The old code must stay inside until the codebase is not aligned with the new standard.
This step is used to help communication inside team.

## 3) Danger deprecation (30 days)
Once everything has been aligned with the new standard, we can activate the danger phase.
This is the final stage of the refactoring, we use this period of time to make sure the code is not re-introduced.

## 4) Remove old code
