import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  constructor() {
    window.onload = this.__FunctionSlide;
  }

  
  ngOnInit(): void {
  }

  Imagedata = [
    '../../../assets/images/forest 1.jpg',
    '../../../assets/images/forest 2.jpg',
    '../../../assets/images/forest 3.jpg',
    '../../../assets/images/forest 4.jpg',
    '../../../assets/images/im34.jpg'
  ];

  startIndex = 0;

  isDisablednext = false;
  isDisabledprev = false;

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));

    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      console.log(this.startIndex);
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
      this.isDisablednext = true;
      this.isDisabledprev = false;
    } else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
      if (this.startIndex !== 1 && this.startIndex != 4) {
        this.isDisabledprev = false;
        this.isDisablednext = false;
      }
    }
  }

  __FunctionSlideprev() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    slides.reverse();
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      console.log(this.startIndex);
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
      this.isDisabledprev = true;
      this.isDisablednext = false;
    } else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
      if (this.startIndex !== 1 && this.startIndex != 4) {
        this.isDisabledprev = false;
        this.isDisablednext = false;
      }
    }
  }

  next() {
    this.__FunctionSlide();
  }

  previous() {
    this.__FunctionSlideprev();
  }


}