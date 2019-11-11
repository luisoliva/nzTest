import { Component, OnInit, Inject } from '@angular/core';
import { IReaderRepo, TOKEN_IREADER_REPO} from 'src/core/IReaderRepo.repository';
import { UserModel } from 'src/models/User.model';
import { PRUEBA_TOKEN, Iprueba } from 'src/core/Iprueba';
import { Prueba1 } from 'src/core/prueba1';
import { UserReaderRepo } from 'src/core/ReaderRepo.repository';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: TOKEN_IREADER_REPO,
      useClass: UserReaderRepo,
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'testZorro';
  user: UserModel = {
    name: 'habib',
    description: 'sfsdfsd'
  };

  constructor(@Inject(TOKEN_IREADER_REPO) private repo: IReaderRepo) {

  }

  ngOnInit() {
    console.log(this.repo.Get('https://jsonplaceholder.typicode.com/todos/1'));
  }

}
