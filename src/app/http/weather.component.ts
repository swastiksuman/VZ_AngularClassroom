import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { debounceTime, switchMap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new Headers({
        'Content-Type': 'application\json'
    })
};


@Component({
    selector: "app-weather",
    template: `
    <div class="container">
      <h3 style="background:orange">Live Weather Forecast by Swastik</h3>

      City:<input type="text"
            [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2 >Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent implements OnInit {
    //http://api.openweathermap.org/data/2.5/weather?q=chennai&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73

    private baseWeatherURL =
    'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix  =
    '&units=imperial&appid=293a0ddf7702211b1d931aa932e2848e';

   // FormControl comes from ReactiveFormsModule
    searchInput: FormControl = new FormControl();
    temperature: string;
    description = '';
    humidity = '';

    constructor(private http: Http){
        this.searchInput.valueChanges
            .pipe(debounceTime(4000))
            .pipe(switchMap((city: string) => this.getWeather(city)))
            .subscribe( ( res: any) => {
               this.description = res.weather[0].description;
               this.temperature = res.main.temp;
               this.humidity = res.main.humidity;
            },
            (err: any) =>{
            console.log(`Can't get WeatherComponent. Error code: %s, URL: %s`,
            err.message, err.url);
            this.searchInput.setValue('Hyderabad');
            }
        ,
        () => console.log('made request to openwather map')
            );
    }

    ngOnInit(){
        console.log('ngOnInit Called');
        this.searchInput.setValue('Hyderabad');
    }

    createWeather(data){

    }

    getWeather(city: string): Observable<Array<string>>{
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .pipe(map((data: any) => {
                console.log(data);
                return data.json()
            }));
    }

    onButtonClick(){
        console.log('Inside button func');
        this.searchInput.valueChanges.subscribe( (res: any) => {
            this.description = res.weather[0].description;
            this.temperature = res.main.temp;
            this.humidity = res.main.humidity;
         },
         (err: any) =>
         console.log(`Can't get WeatherComponent. Error code: %s, URL: %s`,
         err.message, err.url
     ),
     () => console.log('made request to openwather map')
         );
    }
}
