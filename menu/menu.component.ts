import { Component, OnInit,Input } from '@angular/core';
import { MenuitemsService } from '../_services/menuitems.service';
import { ActivatedRoute,Router } from '@angular/router';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
/*Create dynamic navigation
*@Input file : File contains menu links
*@Input menubg: Background color setting
*@Input itemColor: Default item color
*@Input activeItemColor: active item color
*/
export class MenuComponent implements OnInit {
  private _file;
  private _bgColor;
  private _activeItemColor;
  private _ItemColor;
  @Input() 
  set activeItemColor(activeItemColor:string){
	  this._activeItemColor=(activeItemColor && activeItemColor.trim())||'#fff'
  }
  get activeItemColor(): string { return (this._activeItemColor)?this._activeItemColor:'#fff'; }
  @Input() 
  set itemColor(itemColor:string){
	  this._ItemColor=(itemColor && itemColor.trim())||'#fff'
  }
  get itemColor(): string { return (this._ItemColor)?this._ItemColor:'#fff'; }
  @Input() 
  set menubg(menubg:string){
	  this._bgColor=(menubg && menubg.trim())||null
  }
  get menubg(): string { return this._bgColor; }
  @Input() 
  set file(file:string){
	  this._file = (file && file.trim()) || null;
  }
  get file(): string { return this._file; }
  @Input()
  set disableItem(disableItem:string){
	  let disable=(disableItem)?disableItem:null;
	  this.disableItems = disable.split(",");
  }
  get disableItem(): string { return this.disableItems; }
  private menuitems:any=[];
  private activeRoute:any=null;
  private disableItems:any=[];
  constructor(private menuitemsservice:MenuitemsService,private route:ActivatedRoute,private router:Router) { 
	//subscribe to route observal
	(this.route.url).subscribe(data=>{
		this.activeRoute=(data.length==0)?'/':'/'+(data[0].path);
	})
  }

  ngOnInit() {
	if(this.file){
		//Read menu items from the json file
		this.menuitemsservice.getJSON(this.file).subscribe(data=>{
			if(data && data.length>0){
				let routerArray = data;
				let filterRouter = routerArray.filter((items)=>{
					let name = (items.menu_name).toLowerCase();
					if((this.disableItems).indexOf(name)==-1){
						return items;
					}
				})
				this.menuitems = filterRouter;
			}else{
				this.menuitems = [];
			}
		})
	}else{
		let routerArray = this.router.config;
		let filterRouter = routerArray.filter((items,key)=>{
			let name = (items.path=="")?"home":((items.path).replace('_',"")).toLowerCase();
			if(!(routerArray[key]).hasOwnProperty('redirectTo') && (this.disableItems).indexOf(name)==-1){
				return items;
			}
		})
		let newRoutesArray=filterRouter.map((item)=>{
			let newObj={
			menu_link:'/'+item.path,
			menu_name:((item.path=="")?"HOME":((item.path).replace('_',"")).toUpperCase()),
			menu_child:((item.children)?item.children:[])}
			return newObj;
		})
		this.menuitems=newRoutesArray
	}
  }

}
