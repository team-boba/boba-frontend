import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  employeeForm = this.fb.group({
    title: ['Enter title', [Validators.required, Validators.minLength(2)]],
    manager: [''],
    startDate: ['', [Validators.required]],
    endDate: ['', []]
  });
}
