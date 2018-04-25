import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jmsapp-update-recruiter',
  templateUrl: './update-recruiter.component.html',
  styleUrls: ['./update-recruiter.component.css']
})
export class UpdateRecruiterComponent implements OnInit {

  @Input() name;
  @Input() contact;
  @Input() userWebLink;
  @Input() email;
  fullImagePath:string;

  selectedFile:File = null;
  constructor() { 
    this.fullImagePath = "/assets/images/profile.png";
  }

  ngOnInit() {
  }

  onSubmit(){
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    
  }
  
  getImage(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  
}
