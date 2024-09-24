import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  adminForm: any;
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.initializeAddForm();
  }
  ngOnInit(): void {
    this.getCountry();
  }

  initializeAddForm() {
    this.adminForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      dob: ['', Validators.required],
      addressStreet1: ['', Validators.required],
      addressStreet2: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      companyName: ['', Validators.required],
      companyAddressStreet1: ['', Validators.required],
      companyAddressStreet2: ['', Validators.required],
      companyZipCode: ['', Validators.required],
      companyMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      companyFax: ['']
    });
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      const formData = {
        ...this.adminForm.value,
        role: 0 
      };
  
      this.commonService.post('superadmin/admin', formData).subscribe(
        (response: any) => {
          if (response.statusCode === 200 || response.statusCode === 201) {
            console.log('Admin saved successfully:', response.data);
            this.onCancel();
          } else {
            console.error(`Error: ${response.message}`);
            this.handleError(response.message);
          }
        },
        (error) => {
          console.error('HTTP Error:', error);
          this.handleError('An error occurred while saving the admin.');
        }
      );
    }
  }
  

  getCountry() {
    this.commonService.get('common/country').subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.countryList = response.data;
        } else {
          console.error(`Error: ${response.message}`);
          this.handleError(response.message);
        }
      },
      (error) => {
        console.error('HTTP Error:', error);
        this.handleError('An error occurred while fetching the country list.');
      }
    );
  }

  onCountryChange(event: Event) {
    const countryId = (event.target as HTMLSelectElement).value;
    this.loadStates(countryId);
    this.adminForm.get('state').setValue(''); 
    this.adminForm.get('city').setValue('');
  }

  loadStates(countryId: string) {
    this.commonService.get(`common/state?country_id=${countryId}`).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.stateList = response.data;
        } else {
          console.error(`Error: ${response.message}`);
          this.handleError(response.message);
        }
      },
      (error) => {
        console.error('HTTP Error:', error);
        this.handleError('An error occurred while fetching the state list.');
      }
    );
  }

  onStateChange(event: Event) {
    const stateId = (event.target as HTMLSelectElement).value;
    this.loadCities(stateId);
    this.adminForm.get('city').setValue('');
  }

  loadCities(stateId: string) {
    this.commonService.get(`common/city?state_id=${stateId}`).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          this.cityList = response.data;
        } else {
          console.error(`Error: ${response.message}`);
          this.handleError(response.message);
        }
      },
      (error) => {
        console.error('HTTP Error:', error);
        this.handleError('An error occurred while fetching the city list.');
      }
    );
  }

  handleError(message: string) {
    alert(message); 
  }

  onCancel(): void {
    this.adminForm.reset();
    this.countryList = [];
    this.stateList = [];
    this.cityList = [];
  }
}
