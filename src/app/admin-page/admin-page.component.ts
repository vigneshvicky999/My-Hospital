import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { adminModel } from './admin.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {
  addForm: FormGroup;
  employee: any[] = []
  employeeModelObj: adminModel = new adminModel();
  showAddBtn: boolean = true;
  showUpdateBtn!: boolean;
  _filterText: string = ''
  filteredEmployee: adminModel[] = []
  key = 'name'; 
  reverse: any
  get filterText() {
    return this._filterText
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredEmployee = this.filterDoctorByName(value);
  }

  constructor(private fb: FormBuilder, private WebApi: AppointmentService) {
    this.addForm = this.fb.group({
      id: new FormControl(['']),
      name: new FormControl(['']),
      specialist: new FormControl(['']),
      email: new FormControl(['']),
    })
  }

  ngOnInit(): void {
    this.getData();
  }
  get f() {
    return this.addForm.controls
  }

  postData() {
    this.employeeModelObj.id = this.addForm.value.id;
    this.employeeModelObj.name = this.addForm.value.name;
    this.employeeModelObj.specialist = this.addForm.value.specialist;
    this.employeeModelObj.email = this.addForm.value.email;

    this.WebApi.postData(this.employeeModelObj).subscribe(res => {
      this.employee.push(this.addForm.value);
      alert("Added");
      this.addForm.reset()
    })

  }

  getData() {
    this.WebApi.getData().subscribe(res => {
      this.employee = res;
      this.filteredEmployee = this.employee;
    })
  }
  deleteData(emp: any) {
    this.WebApi.deleteData(emp).subscribe(res => {
      alert("Deleted");
      this.getData()
    })
  }

  putData(_emp: any) {
    this.employeeModelObj.id = this.addForm.value.id;
    this.employeeModelObj.name = this.addForm.value.name;
    this.employeeModelObj.specialist = this.addForm.value.specialist;
    this.employeeModelObj.email = this.addForm.value.email;
    this.WebApi.putData(this.employeeModelObj, this.employeeModelObj.id).subscribe(_emp => {
      alert("Updated");
      this.addForm.reset();
      this.showAddBtn = true;
      this.showUpdateBtn = false;
      this.addForm.reset();
      this.getData()
    })
  }

  onEdit(emp: any) {
    this.showAddBtn = false;
    this.showUpdateBtn = true;
    this.employeeModelObj.id = emp.id;
    this.addForm.controls['id'].setValue(emp.id);
    this.addForm.controls['name'].setValue(emp.name);
    this.addForm.controls['specialist'].setValue(emp.specialist);
    this.addForm.controls['email'].setValue(emp.email);
  }
  
 //filtering the specialist
  filterDoctorByName(fText: string) {
    if (this.employee.length === 0 || this.filterText === '') {
      return this.employee;

    }
    else {
      return this.employee.filter((adminModel) => {
        const check = adminModel.specialist.toLowerCase() === fText.toLowerCase();
        return check;
      })

    }
  }
  sort(table: string): void {
    if (table === this.key) {
      this.reverse = !this.reverse;
    }
    this.employee.sort((value1, value2) => {
      const storedValue1 = value1[this.key].toLowerCase();
      const storedValue2 = value2[this.key].toLowerCase();
      if (this.reverse) {
        return storedValue2.localeCompare(storedValue1);
      } else {
        return storedValue1.localeCompare(storedValue2);
      }
    });
  }
}
