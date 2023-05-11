//loader.interceptor.ts
import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

    loading: boolean | undefined;
    constructor(private loaderService: LoaderService) {
        this.loaderService.isLoading.subscribe((v: boolean) => {
            //console.log(v);
            this.loading = v;
        });
    }
    ngOnInit() {
    }
}