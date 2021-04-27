import { Component, VERSION,OnInit,Output,EventEmitter } from '@angular/core';

import {FormControl} from '@angular/forms'
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles:[`
.menu {
	padding-right: 1rem;
	padding-left: 1rem;
	padding-bottom: .5rem;
	background-color: #f8f9fa;
	border-bottom-right-radius: .25rem;
	border-bottom-left-radius: .25rem;
	align-items: flex-start;
	position: absolute;
	display: flex;
  justify-content: space-between; 
  left:-1rem;
}
 
@media(min-width:576px) {
  .menu{
    width:100%
  }
  ul.dropdown-menu{
    width:inherit;
  }
}  
`]
})
export class NavBarComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  search=new FormControl();
  isMenuCollapsed:boolean=true
  @Output() searchChange:EventEmitter<any>=new EventEmitter<any>();
  ngOnInit()
  {
     this.search.valueChanges.pipe(debounceTime(200)).subscribe(res=>{
       this.searchChange.emit(res)
     })
  }
}