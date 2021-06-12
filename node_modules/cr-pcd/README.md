# CrPcd

This is a Costa Rica PCD (province, cantons, districts) angular library.

# Installation
Install the dependency:
```
npm i --save cr-pcd
```
Then you can use it in your angular project.
```typescript
import { Component, OnInit } from '@angular/core';
import { CrPcdService } from 'cr-pcd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  provinces: any;

  constructor(
    private crPcd: CrPcdService
  ) { }

  async ngOnInit() {
    this.provinces = this.crPcd.getProvinces();
  }

}
```

## API
## Get provinces
To return all provinces use:
```
getProvinces()
```
## Get cantons
To return a specific canton you must provide a `provinceId`:
```
getCantons('1')
```
## Get districts
To return a specific district cantons you must provide a `cantonId`:
```
getDistricts('1')
```