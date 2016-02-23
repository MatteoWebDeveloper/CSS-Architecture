# CSS Architecture setup

#Docs
- [CSS Architecture](src/scss/architecture.md)
- [CSS Development Procedure](src/scss/development-procedure.md)
- [CSS Deprecation Procedure](src/scss/refactoring-procedure.md)
- [CSS UI Library](src/scss/ui-library.md)
- [CSS Test](src/scss/test.md)
- [CSS Tools](src/scss/tools.md)

## install node packages
`npm install`

## install bower packages
`bower install`

## tasks:
* `gulp`
* `gulp --sm`

## test
go to backstopjs module
> cd /node_modules/backstopjs/

this command create list of image reference
> gulp reference

this task is comparing your reference with the current UI
> gulp test
