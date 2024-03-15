import { 
  Component, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() status: boolean;
  @Input() name: string;
  @Input() id: number;

  @Output() changeStatus = new EventEmitter<number>();

  constructor() {
    this.id = 1;
    this.status = false;
    this.name = '';
  }

  onChangeStatus(): void {
    this.changeStatus.emit(this.id);
  }
}
