import { Component, OnInit , Input} from '@angular/core';//input declarative for customizing compo

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header=true;
  @Input() lines=3;
  constructor() { }

  ngOnInit(): void {
  }

}
