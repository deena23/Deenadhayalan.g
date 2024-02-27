import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){}
  
  ngOnInit(){
    window.scrollTo(0, 0);
    var nav = document.querySelector("nav");
    nav?.classList.remove('glassmorphism');
    window.addEventListener('scroll', () => {
      if(scrollY >= 50) {
        nav?.classList.add('glassmorphism');
      } else{
        nav?.classList.remove('glassmorphism');
      }
    })
  }

  scrollTo(element: HTMLElement, activeElement: HTMLElement){
    var elems = document.querySelectorAll('.active');
    elems.forEach((e)=> {
      e.classList.remove('active');
    });
    if(activeElement.innerHTML == 'Home') {
      window.scrollTo(0, 0);
    } else{
      window.scrollTo(0, element.offsetTop - 100);
      // element.scrollIntoView();
    }
    activeElement.classList.add("active");
  }
}
