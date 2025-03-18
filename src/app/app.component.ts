import { Component } from '@angular/core';
// import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openai-multi';

  description = '';

  // constructor(private openAiService: OpenAiService) { }

  getSuggestion(): void {
    // this.openAiService.getSuggestion(this.description);
  }

}
