import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  imageGroup!:FormGroup;
  filePath!:string;
  constructor(private fb:FormBuilder) {
    this.imageGroup = this.fb.group({
      img: [null],
      filename:['']
    });
   }

  ngOnInit(): void {}
  
  imagePreview(e:any){
    const file = e.target.files[0];

    this.imageGroup.patchValue({
      img: file    //toshowobjectinconsole
    });       

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)  //toshowimage
  }

  onSubmit(){
    console.log(this.imageGroup.value);
  }

}
