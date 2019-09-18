Name : MenuComponent
Selector : app-menu
Description :  Component will display the navigation either from application routes or user defined routes json.
Configuration : 
	@Input activeItemColor:string - Active item  color
	@Input itemColor:string - Item Default color
	@Input menubg:string - Background Color
	@Input file:string - File Name
	@Input disableItem:string - Disable item comma seperated string name
Peer Dependencies:
	"@angular/common": "^7.2.0",
	"@angular/core": "^7.2.0",
	"@ng-bootstrap/ng-bootstrap": "^4.0.0",
	"bootstrap": "^4.3.1",
	"jquery": "^3.4.1",
	"@angular/router": "~7.2.0"
Installation: Place the component inside your application src folder and import it in main.component.ts . Use it with the selector .
Examples:
	<app-menu menubg="#e83e8c" disableItem="home" file="./assets/menu_config.json"></app-menu> // with read route from user defined file and disable item
	<app-menu menubg="#e83e8c" disableItem="home"></app-menu> // /display default menu from route.modules.ts with disable routes and menu background color
	<app-menu></app-menu> //display default menu from route.modules.ts