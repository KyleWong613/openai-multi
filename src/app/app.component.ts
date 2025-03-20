import { AfterViewInit, Component } from '@angular/core';
// import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'openai-multi';

  description = '';
  isChat = false; // Add this to your component class

  ngAfterViewInit() {
    // Add click event for the .c-button
    $(document).on("click", ".c-button", function () {
      let windowHeight = $(window).height() || 0; // Ensure a valid number (default to 0)
      let containerHeight = $(".ai-container").outerHeight() || 0; // Ensure it's not undefined
      let newTop = windowHeight - containerHeight - 30; // Position it above by 30px
      let chatContainer = $(".chat-container");
      let container = $(".ai-container");
      if (this.isChat) return; // Prevent multiple animations
      chatContainer.attr("data-chat-active", "true").fadeIn(); // Show chat container
      this.isChat = true; // Mark as moved after animation completes


      // container.animate({ marginTop: "+=" + newTop + "px" }, 200, () => {
      //   this.isChat = true; // Mark as moved after animation completes

      // });
    });
  }

  // constructor(private openAiService: OpenAiService) { }

  getSuggestion(): void {
    // this.openAiService.getSuggestion(this.description);
  }

}
