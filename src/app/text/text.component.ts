import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  prompt: string = '';
  completedText: string = '';
  apiKey: string = ''; // Replace with your OpenAI API key

  constructor(private http: HttpClient) {}
  isDarkTheme = false;
  selectedModel = 'Open AI'; // Default selection
  aiModels = ['Open AI','Grok 3', 'Grok 2', 'GPT-4', 'Claude 3', 'Gemini 1.5']; // Add AI model options
  selectedModel2 = 'Gemini 1.5'; // Default selection
  aiModels2 = ['Open AI','Grok 3', 'Grok 2', 'GPT-4', 'Claude 3', 'Gemini 1.5']; // Add AI model options
  selectedModel3 = 'Grok 3'; // Default selection
  aiModels3 = ['Open AI','Grok 3', 'Grok 2', 'GPT-4', 'Claude 3', 'Gemini 1.5']; // Add AI model options
  aiModes = ['Chat', 'Generate Image', 'Generate Video'];
  selectedMode = 'Chat'; 

  ngOnInit() {
    // Example jQuery usage: Change background on load
    $(document).ready(() => {
      $('.ai-container').css('border', '2px solid #007bff'); // Add a border to ai-container
      $(".attach-button").on("click", function () {
        $("#file-upload").click();
      });
    
      $("#file-upload").on("change", function (event) {
        let input = event.target as HTMLInputElement; // Cast to input element
        if (input.files && input.files.length > 0) {
          let fileName = input.files[0].name;
          let chatBubble = `
            <div class="chat-image user-message">
              <div class="ai-response">
                <p>${fileName}</p>
              </div>
            </div>
          `;
          let chatContainer = $(".chat-container");
          chatContainer.removeClass("d-none").attr("data-chat-active", "true").fadeIn();
          // Append the chat bubble to the chat container
          chatContainer.append(chatBubble);
          
          console.log("Selected file:", fileName);
        }
      });
    });
  }
  
  ccompleteText() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
  
    const data = {
      model: 'text-davinci-003', // Choose the appropriate legacy model
      prompt: this.prompt,
      max_tokens: 50 // Adjust as needed
    };
  
    // const endpoint = 'https://api.openai.com/v1/completions'; // api endpoint 

    // this.http.post<any>(endpoint, data, { headers })
    //   .subscribe(response => {
    //     this.completedText = response.choices[0].text;
    //   }, error => {
    //     console.error('API Error:', error);
    // });
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    console.log("Theme toggled:", this.isDarkTheme);
  }
  signup()
  {
    alert("You have successfully signed up");
  }
  signin()
  {
    alert("You have successfully signed in");
  }
}
