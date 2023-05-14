import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileupload';

constructor(private http:HttpClient){}

userFile={
  district: 'district',
  subDistrict: 'subDistrict',
  files:[]
}
  send(form:NgForm){
    let formData=new FormData();
    formData.append('district',this.userFile.district)
    formData.append('subDistrict',this.userFile.subDistrict)
    formData.append('files',this.userFile.files[0])
    this.http.post('http://192.168.1.6:8080/send',formData).subscribe(data=>{
      console.log(data)
    })
  }

  selectFiles(evt:any)
  {
     this.userFile.files= evt.target.files[0];
  }


  getDataFromSubjectEmiter(evt:any){
    console.log(evt);
  }
}
