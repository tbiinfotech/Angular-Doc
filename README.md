# Component Name:MenuComponent

```
Selector:app-menu
```
## Configurations

```
@Input activeItemColor:string - Active item  color
@Input itemColor:string - Item Default color
@Input menubg:string - Background Color
@Input file:string - File Name
@Input disableItem:string - Disable item comma seperated string name
@ToDO: Create dynamic sidear
```

## PEER DEPENDENCY

```
"@angular/common": "^7.2.0",
"@angular/core": "^7.2.0",
"@ng-bootstrap/ng-bootstrap": "^4.0.0",
"bootstrap": "^4.3.1",
"jquery": "^3.4.1",
"@angular/router": "~7.2.0"
```

# Please install the peer dependency before process .

## Installation
 * Please the component inside src/ folder
 * In your main.component.ts file .Please add
 * import { MenuComponent } from './menu/menu.component';
 * Use the selector to use it anywhere

## Description

Create a navigation from routes or route defined file 

## Examples

```
<app-menu menubg="#e83e8c" disableItem="home" file="./assets/menu_config.json"></app-menu>
```